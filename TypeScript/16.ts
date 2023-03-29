// TypeScript Utility Types

// TypeScript comes with a large number of types that can help with some common type manipulation, usually referred to as utility types.

// This chapter covers the most popular utility types.

// Partial
// Partial changes all the properties in an object to be optional.

interface length {
  height: number;
  width: number;
}

const mData: Partial<length> = {};
mData.height = 10;

console.log(mData);

// Required
// Required changes all the properties in an object to be required.

interface car {
  make: string;
  model: string;
  mileage?: number;
}

let carData: Required<car> = {
  make: "Honda",
  model: "Amaze",
  mileage: 10,
};

console.log(carData);

// Record
// Record is a shortcut to defining an object type with a specific key type and value type.

const customMap: Record<string, number> = {
  Aayush: 28,
  Ravi: 29,
  parth: 21,
};

console.log(customMap);

// Omit
// Omit removes keys from an object type.

interface empData {
  name: string;
  class: string;
  phone: number;
}

const edtata: Omit<empData, "name" | "phone"> = {
  class: "10th",
};

console.log(edtata);

// Pick
// Pick removes all but the specified keys from an object type.

const edtata1: Pick<empData, "name"> = {
  name: "Aayush",
};

console.log(edtata1);

// Exclude
// Exclude removes types from a union.

type Primitive = string | number | boolean;
const value1: Exclude<Primitive, string> = true; // a string cannot be used here since Exclude removed it from the type.

// ReturnType
// ReturnType extracts the return type of a function type.
type PointGenerator = () => { x: number; y: number };
const point: ReturnType<PointGenerator> = {
  x: 10,
  y: 20,
};
console.log(point);

// Parameters
// Parameters extracts the parameter types of a function type as an array.

type pointer = (p: { x: number; y: number }) => void;

const point1: Parameters<pointer>[0] = { x: 10, y: 20 };

console.log(point1);