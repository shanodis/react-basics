import React, { FC } from 'react';
import { useDataContext } from "../providers/DataProvider";

const ContextDataExample: FC = () => {
  const dataContext = useDataContext();
  return (
    <div>
      <h3>Context Data Viewer</h3>
      <p>ID: {dataContext.id}</p>
      <p>Full Name: {dataContext.fullName}</p>
      <p>Email: {dataContext.email}</p>
    </div>
  );
};

export default ContextDataExample;