// Lib dependencies
import { faker } from "@faker-js/faker";

const NUMBER_OF_DATASETS = 3;

const NUMBER_OF_LABELS = 7;

const MAX_DATA_VALUE = 1000;

const MIN_DATA_VALUE = 0;

const LABELS = [...Array(NUMBER_OF_LABELS).keys()].map((i) =>
  faker.name.firstName()
);

const DATASETS = [...Array(NUMBER_OF_DATASETS).keys()].map((i) => ({
  label: faker.name.lastName(),
  data: LABELS.map(() =>
    faker.datatype.number({ min: MIN_DATA_VALUE, max: MAX_DATA_VALUE })
  ),
  borderColor: faker.color.rgb({ format: "css" }),
  backgroundColor: faker.color.rgb({ format: "css" }),
}));

const SIMPLE_DATA = {
  labels: LABELS,
  datasets: DATASETS,
};

export { SIMPLE_DATA };
