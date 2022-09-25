import apiUrl from '../apiConfig'
import axios from 'axios'

export const getAllPictures = () => {
	return axios({
		method: 'GET',
		url: apiUrl + '/gallery',
	})
}