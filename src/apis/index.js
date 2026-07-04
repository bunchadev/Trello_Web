import { API_ROOT } from '~/utils/constants'
import authorizedAxiosInstance from '~/utils/authorizeAxios'

// board
// export const fetchBoardDetailsAPI = async (boardId) => {
//   const response = await authorizedAxiosInstance.get(`${API_ROOT}/v1/boards/${boardId}`)
//   // authorizedAxiosInstance sẽ trả về property của nó là data
//   return response.data
// }

// update board
export const updateBoardDetailsAPI = async (boardId, updateData) => {
  const response = await authorizedAxiosInstance.put(`${API_ROOT}/v1/boards/${boardId}`, updateData)
  // authorizedAxiosInstance sẽ trả về property của nó là data
  return response.data
}

export const moveCardToDifferentColumnAPI = async (updateData) => {
  const response = await authorizedAxiosInstance.put(`${API_ROOT}/v1/boards/supports/moving_card`, updateData)
  // authorizedAxiosInstance sẽ trả về property của nó là data
  return response.data
}

// column
export const createNewColumnAPI = async (newColumnData) => {
  const response = await authorizedAxiosInstance.post(`${API_ROOT}/v1/columns`, newColumnData)
  return response.data
}

export const updateColumnDetailsAPI = async (columnId, updateData) => {
  const response = await authorizedAxiosInstance.put(`${API_ROOT}/v1/columns/${columnId}`, updateData)
  // authorizedAxiosInstance sẽ trả về property của nó là data
  return response.data
}

export const deleteColumnDetailsAPI = async (columnId) => {
  const response = await authorizedAxiosInstance.delete(`${API_ROOT}/v1/columns/${columnId}`)
  // authorizedAxiosInstance sẽ trả về property của nó là data
  return response.data
}

// card
export const createNewCardAPI = async (newCardData) => {
  const response = await authorizedAxiosInstance.post(`${API_ROOT}/v1/cards`, newCardData)
  return response.data
}

