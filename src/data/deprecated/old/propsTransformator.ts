interface ArdoongaPropsTrans {
  [key: string]: {
    [key: string]: string | number
  }
}

export default function propsTransformator(props : string[]) {
  let o : ArdoongaPropsTrans = {}
   props.forEach((prop) => {
     const [category, key, value] = prop.split(":");
     const isNumber = !isNaN(Number(value))? parseFloat(value) : value;
       if (! Object.hasOwn(o, category)) o[category] = {}
       if (! Object.hasOwn(o[category], key)) o[category][key] = isNumber;
   });
   return o
 }
