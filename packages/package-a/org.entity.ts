import { Entity, Attribute } from "@typedorm/common";

@Entity({
  name: "org",
  primaryKey: {
    partitionKey: "{{id}}",
  },
})
export class Org {
  @Attribute()
  id: string;
}
