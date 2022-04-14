import axios from "axios";

export class FootballDataService {
  private static _url: string =
    "https://api.football-data.org/v2/competitions/";
  public static GetData() {
    const conpetencia: string = "CL";
    const headers = { "X-Auth-Token": "648e92bfd373457995bf008100698529" };
    return axios
      .get(this._url + conpetencia + "/matches?status=SCHEDULED,POSTPONED", {
        headers: headers,
      })
      .then((res) => {
        console.log(`statusCode: ${res.status}`);
        //console.log(res);
        return res.data;
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
