import axios, { AxiosRequestConfig, AxiosPromise } from "axios";
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const authOrigin = "st016:1234";
const authStr = `Basic ${new Buffer(authOrigin).toString("base64")}`;
const baseUrl = "https://10.60.45.8:8800/zosmf/restjobs/jobs";

const config: AxiosRequestConfig = {
  headers: {
    "Content-type": "text/plain",
    Authorization: authStr
  }
};

export async function runJCL(code: string) {
  const { status, data } = await axios.put(baseUrl, code, config);

  if (status === 201) {
    const jobUrl = `${baseUrl}/${data.jobname}/${data.jobid}`;
    return getJobData(jobUrl);
  }
}

async function getJobData(url: string) {
  while (true) {
    const { status, data } = await axios.get(url, config);
    if (status === 200 && data.status === "OUTPUT") {
      return await getJobResult(url);
    }
    await delay(100);
  }
}

async function getJobResult(url: string) {
  const { status, data } = await axios.get(`${url}/files`, config);
  if (status === 200) {
    const reqs: AxiosPromise[] = data.map((d: any) =>
      axios.get(`${url}/files/${d.id}/records`, config)
    );
    const result = await Promise.all(reqs);
    return result.map(r => r.data).join("");
  }
}

function delay(time: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), time);
  });
}
