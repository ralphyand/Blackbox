const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      token: null,
      name: null,
      course: [],
    },
    actions: {
      // Use getActions to call a function within a fuction

      // //getCourse: () => {
      //   fetch(process.env.BACKEND_URL + "/api/course")
      //     .then((data) => data.json())
      //     .then((data) => setStore({ course: data }));
      //   //
      //},

      getCourse: async () => {
        try {
          const resp = await fetch(process.env.BACKEND_URL + "/api/course", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data = await resp.json();
          setStore({
            course: data,
          });
          console.log(data);
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      login: async (email, password) => {
        const resp = await fetch(process.env.BACKEND_URL + "/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // 'Authorization': 'Bearer ' + getStore().token,
            // 'Authorization': 'Bearer ' + localStorage.getItem("jwt-token")
            // enviamos el token al backend (usamos una de las dos opciones)
          },
          body: JSON.stringify({ email: email, password: password }),
        });

        if (!resp.ok) throw Error("There was a problem in the login request");

        if (resp.status === 401) {
          throw "Invalid credentials";
        } else if (resp.status === 400) {
          throw "Invalid email or password format";
        }
        const data = await resp.json();
        // save your token in the localStorage
        //also you should set your user into the store using the setStore function
        localStorage.setItem("jwt-token", data.token); // guardar sesión en el disco duro(token y nombre del user)
        setStore({ token: data.token });
        localStorage.setItem("name", data.name); // guardar sesión en el disco duro
        setStore({ name: data.name });

        return true;
      },

      setToken: (token, name) => {
        setStore({ token: token });
        setStore({ name: name });
      },

      logout: () => {
        // borramos usuario y token del Store y de localStorage al cerrar la sesión
        setStore({ token: null });
        setStore({ name: null });
        localStorage.removeItem("jwt-token");
        localStorage.removeItem("name");
      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
