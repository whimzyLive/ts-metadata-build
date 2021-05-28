import { Entity, Attribute } from "@typedorm/common";

@Entity({
  name: "branch",
  primaryKey: {
    partitionKey: "{{id}}",
  },
})
export class Branch {
  @Attribute()
  id: string;
}
