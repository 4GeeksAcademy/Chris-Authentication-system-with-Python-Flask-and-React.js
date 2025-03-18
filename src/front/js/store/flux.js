const getState = ({ getStore, getActions, setStore }) => {
  return {
      store: {
          message: null,
          demo: [
              {
                  title: "FIRST",
                  background: "white",
                  initial: "white"
              },
              {
                  title: "SECOND",
                  background: "white",
                  initial: "white"
              }
          ],
          user: null,
          events: []
      },
      actions: {
          exampleFunction: () => {
              getActions().changeColor(0, "green");
          },

          getMessage: async () => {
              try {
                  const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
                  const data = await resp.json();
                  setStore({ message: data.message });
                  return data;
              } catch (error) {
                  console.log("Error loading message from backend", error);
              }
          },

          signup: async (email, password) => {
              try {
                  const resp = await fetch(process.env.BACKEND_URL + "/api/signup", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ email, password })
                  });
                  const data = await resp.json();
                  return data;
              } catch (error) {
                  console.log("Signup error", error);
              }
          },

          login: async (email, password) => {
              try {
                  const resp = await fetch(process.env.BACKEND_URL + "/api/login", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ email, password })
                  });
                  const data = await resp.json();
                  if (data.token) {
                      localStorage.setItem("token", data.token);
                      setStore({ user: data });
                  }
                  return data;
              } catch (error) {
                  console.log("Login error", error);
              }
          },

          getEvents: async () => {
              try {
                  const resp = await fetch(process.env.BACKEND_URL + "/api/events");
                  const data = await resp.json();
                  setStore({ events: data });
              } catch (error) {
                  console.log("Error fetching events", error);
              }
          }
      }
  };
};

export default getState;