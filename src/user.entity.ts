import { Entity, Attribute } from "@typedorm/common";

@Entity({
  name: "user",
  primaryKey: {
    partitionKey: "id",
  },
})
export class User {
  @Attribute()
  id: string;
}
