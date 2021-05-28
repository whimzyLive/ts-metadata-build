import { Org } from '@package-a/org.entity';
import { Branch } from '@package-b/branch.entity';

import { User } from './user.entity';
const user = new User();
user.id = 'user-1';

const org = new Org();
org.id = 'org-1';

const branch = new Branch();
branch.id = 'branch-1';

// print
console.log('User: ', user.id);
console.log('Org: ', org.id);
console.log('Branch: ', branch.id);
