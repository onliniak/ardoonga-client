import { registerSchema, validate } from "@hyperjump/json-schema/draft-07";

registerSchema(
    {
      $schema: "http://json-schema.org/draft-07/schema#",
      type: "object",
      required: [
        "name",
        "description",
        "avatar",
        "awidth",
        "aheight",
        "heritage",
        "props",
      ],
      properties: {
        name: { type: "string" },
        description: { type: "string" },
        avatar: {
          type: "string",
          format: "uri",
          pattern: "^https?://",
          example: "https://myhost.eu/image.webp",
        },
        awidth: { type: "integer" },
        aheight: { type: "integer" },
        heritage: { type: "string" },
        props: {
          type: "array",
          items: {
            type: "string",
            pattern: "[A-z]+:[A-z]+:[A-z]+",
            examples: ["test:test:test"],
          },
        },
      },
      examples: [
        {
          name: "test",
          description: "test",
          avatar: "https://myhost.eu/image.webp",
          awidth: 0,
          aheight: 0,
          heritage: "test",
          props: ["test:test:test"],
        },
      ],
    },
    "https://onliniak.github.io/ardoonga-schemas",
  );
  
  export default async function valid(schema) {
    const output = await validate(
      "https://onliniak.github.io/ardoonga-schemas",
      schema,
    );
    if (output.valid) {
      return "Instance is valid :-)";
    } else {
      return "Instance is invalid :-(";
    }
  }