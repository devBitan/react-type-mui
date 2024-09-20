// import { httpService } from './api/http.ts';
import { httpService } from './http.ts';

const {  httpGet } = httpService();

// const apiUrl = 'clans';


export function dashboardAdmin() {

  async function getClans(): Promise<any> {
    let response = await httpGet('clans');
    return response.content;
  }

  async function getUsers(): Promise<any> {
    let response = await httpGet('users');
    return response.content;
  }


  return {
    getClans,
    getUsers
  };
}
