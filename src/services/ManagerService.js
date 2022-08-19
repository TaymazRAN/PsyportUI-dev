import axios from "axios";

const SERVER_URL = "http://188.95.89.161/api";

// Manager

// GET
// ​/api​/identity​/manager

// POST
// ​/api​/identity​/manager​/login

// POST
// ​/api​/identity​/manager​/register​/{orgId}

// POST
// ​/api​/identity​/manager​/register-exe​/{orgId}

// GET
// ​/api​/identity​/manager​/organization​/{orgId}

// GET
// ​/api​/identity​/manager​/public​/{username}

// GET
// ​/api​/identity​/manager​/username

// PUT
// ​/api​/identity​/manager​/{username}​/image

// GET
// ​/api​/Package

export const getAllpackage = () => {
  const url = `${SERVER_URL}/package`;
  return axios.get(url);
};

// POST
// ​/api​/Package
export const createPackage = (packagelist) => {
  // http://188.95.89.161/api/Package/category
  const url = `${SERVER_URL}/package`;
  return axios.post(url, packagelist);
};

// GET
// ​/api​/Package​/category
export const getAllcategory = () => {
  const url = `${SERVER_URL}/Package/category`;
  return axios.get(url);
};

// POST
// ​/api​/Package​/category
export const createCategory = (category) => {
  const url = `${SERVER_URL}/package`;
  return axios.post(url, category);
};

// GET
// ​/api​/Package​/{id}
export const getPackage = () => {
  const url = `${SERVER_URL}/package`;
  return axios.get(url);
};

// PUT
// ​/api​/Package​/{id}
export const updatePackage = (packagelist, packageId) => {
  const url = `${SERVER_URL}/package/${packageId}`;
  return axios.put(url, packagelist);
};

// DELETE
// ​/api​/Package​/{id}

// PUT
// ​/api​/Package​/category​/{id}
export const updateCategory = (category, CategoryID) => {
  const url = `${SERVER_URL}/package/${CategoryID}`;
  return axios.put(url, category);
};

// DELETE
// ​/api​/Package​/category​/{id}

// PUT
// ​/api​/Package​/{id}​/image
export const updatepackageImage = (category, CategoryID) => {
  const url = `${SERVER_URL}/package/${CategoryID}`;
  return axios.put(url, category);
};

// PUT
// ​/api​/Package​/{id}​/file

export const deletePackage = (contactId) => {
  const url = `${SERVER_URL}/package/${contactId}`;
  return axios.delete(url);
};

// PUT
// ​/api​/Package​/{id}​/image
export const updatepackageFile = (category, CategoryID) => {
  const url = `${SERVER_URL}/package/${CategoryID}`;
  return axios.put(url, category);
};
