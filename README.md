# Hey, this is Dhruv!

I'm really passionate about frontend technologies like React and Next.js. I also love going deep into technical stuff like Operating Systems, Networking, etc.

Enough about me. Let's dive into the project details!

## Stack Used

### Frontend

- Next.js
- Tailwind CSS

### Backend

- Node.js
- Express
- MongoDB

## List of Completed Items

### 1. Auth

I have used `jsonwebtokens` to store sessions in the sessions table in the db. So when the user goes to the login page, there's a check from the token stored in the `localStorage` to authenticate the user.

Also, I have created hooks like `useAuth()` that help you conditionally authenticate the user on every page.

```tsx
import useAuth from "@/hooks/useAuth"

export default function Dashboard() {
    let {user, logout, isAuthenticated} = useAuth()
    if (!isAuthenticated) {
        router.push("/auth/login");
    }
    return (
        <div>
            <p>{user.name}</p>
            <button onClick={logout}>Logout</button>
        </div>
    )
}
```

I have used `React Context` to implement the Authentication so that we can access the auth state from anywhere in the react component tree.

```tsx
import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = (token) => {
    setIsAuthenticated(true);
    setUser({ id: 1, name: "John Doe" });
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
```

### 2. Figma Design to React

I have tried my best to match the design pixel to pixel for both the auth and dashboard pages.

[Insert 2 pictures here]

### 3. Drag n Drop

This was both fun and challenging.

Basically, I tried to make the drag and drop as smooth as possible. The database is in sync as you do the drag and drop, without you having to wait for the server to respond. All thanks to this cool newly introduced hook called `useOptimistic`!

You can read more about it [here](https://react.dev/reference/react/useOptimistic).

[Insert video here if possible]

### 4. Task Modal

As the name suggests, but no! It's a sheet/drawer that opens up from the right side.

I have tried to match it pixel to pixel with the design. Also, I have added a `Save` button when the user wants to save the task. A handy addon from my side.

[Insert picture]

### 5. Data Persistence

Everything that you do - add, save, login etc. is saved to the database.

Simple.

I have a db hosted on a VM somewhere deep in the Atlantic :)
