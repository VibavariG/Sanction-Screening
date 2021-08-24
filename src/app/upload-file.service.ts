import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private http: HttpClient) { }

  uploadFile(sendFiles){

    const formData: FormData = new FormData();

    var length = sendFiles.length;
    for(var i = 0; i<length; i++){
      formData.append('files', sendFiles[i]);
    }
    //sendFiles.forEach((file) => { formData.append('files', file); });

    //formData.append('files', sendFile);

    const req = new HttpRequest('POST', 'http://localhost:8086/readTransactions', formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);

    // formData.append("file", sendFile, sendFile.name);
    // return this.http.get('http://localhost:8086/readTransactions', formData);
  }
}
