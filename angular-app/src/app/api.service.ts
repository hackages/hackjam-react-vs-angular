import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Data, SingleCryptoData} from './types/Currency'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Data> {
    return this.http.get<Data>('http://localhost:4000/cryptos')
  }

  getById(id: number): Observable<SingleCryptoData> {
    return this.http.get<SingleCryptoData>(
      `http://localhost:4000/cryptos/${id}`
    )
  }
}
