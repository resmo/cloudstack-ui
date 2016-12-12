import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { BaseBackendService } from './base-backend.service';
import { BackendResource } from '../decorators/backend-resource.decorator';
import { ResourceLimit } from '../models/resource-limit.model';

@Injectable()
@BackendResource({
  entity: 'ResourceLimit',
  entityModel: ResourceLimit
})
export class ResourceLimitService extends BaseBackendService<ResourceLimit> { }


