import Cabin from "../Models/Cabin";

const TestDataCabins: Array<Cabin> = [
  {
    id: "1",
    controls: [
      {
        title: "Air Conditions",
        image: "air-condition",
        href: "air-condition",
        components: [
          {
            type: "Temperature_Slider",
            value: 20,
            label: "Temperature",
          },
        ],
      },
      {
        title: "Lighting",
        image: "lights",
        href: "lights",
        components: [
          {
            type: "List_Item",
            value: 0,
            label: "Living room",
          },
          {
            type: "List_Item",
            value: 1,
            label: "Bathroom",
          },
          {
            type: "List_Item",
            value: 1,
            label: "Bedroom 2",
          },
          {
            type: "List_Item",
            value: 0,
            label: "Balcony",
          },
          {
            type: "List_Item",
            value: 1,
            label: "Bathroom",
          },
          {
            type: "List_Item",
            value: 1,
            label: "Bedroom 2",
          },
          {
            type: "List_Item",
            value: 0,
            label: "Balcony",
          },
          {
            type: "List_Item",
            value: 1,
            label: "Bathroom",
          },
          {
            type: "List_Item",
            value: 1,
            label: "Bedroom 2",
          },
          {
            type: "List_Item",
            value: 0,
            label: "Balcony",
          },
          {
            type: "List_Item",
            value: 1,
            label: "Bathroom",
          },
          {
            type: "List_Item",
            value: 1,
            label: "Bedroom 2",
          },
          {
            type: "List_Item",
            value: 0,
            label: "Balcony",
          },
        ],
      },
    ],
  },
];

export default TestDataCabins;
