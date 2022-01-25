//All API about inspections
import backendApi from '../api/backendApi';
import { getToken } from '../utils/authentication';

const API_PROPERTIES = '/inspections';

export const deleteInspectionById = async (inspectionId) => {
  const token = getToken();
  const config = {
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
  };
  const url = `${API_PROPERTIES}/${inspectionId}`;
  const response = await backendApi.delete(url, config);
  console.log(response);
  return response.data;
};
