import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RailsService {
  resources: string;

  constructor (protected http: HttpClient) {}

  all(option?) {
    return this.http.get('/' + this.resources, option);
  }

  create(attrs) {
    return this.http.post('/' + this.resources, attrs);
  }

  find(id, option?) {
    return this.http.get('/' + this.resources + '/' + id, option);
  }

  update(id, attrs) {
    return this.http.put('/' + this.resources + '/' + id, attrs);
  }

  delete(id, option?) {
    return this.http.delete('/' + this.resources + '/' + id, option);
  }

  save(attrs) {
    id = attrs.id;
    if (id) {
      return update(id, attrs);
    } else {
      return create(attrs);
    }
  }
}
