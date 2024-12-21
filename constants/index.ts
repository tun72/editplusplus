export const navLinks = [
  {
    label: "Image Restore",
    route: "/user/transformations/add/restore",
    icon: "/assets/icons/image.svg",
  },
  {
    label: "Generative Fill",
    route: "/user/transformations/add/fill",
    icon: "/assets/icons/stars.svg",
  },
  {
    label: "Object Remove",
    route: "/user/transformations/add/remove",
    icon: "/assets/icons/scan.svg",
  },

  {
    label: "Enhance Image",
    route: "/user/transformations/add/enhance",
    icon: "/assets/icons/image.svg",
  },

  {
    label: "Background Remove",
    route: "/user/transformations/add/removeBackground",
    icon: "/assets/icons/camera.svg",
  },

  {
    label: "Object Recolor",
    route: "/user/transformations/add/recolor",
    icon: "/assets/icons/filter.svg",
  },
  {
    label: "Style Transfer",
    route: "/user/transformations/add/restyle",
    icon: "/assets/icons/image.svg",
  },
  {
    label: "Dynamic Light",
    route: "/user/transformations/add/dynamic",
    icon: "/assets/icons/image.svg",
  },

  {
    label: "Buy Credits",
    route: "/user/credits",
    icon: "/assets/icons/bag.svg",
  },
  {
    label: "Profile",
    route: "/user/profile",
    icon: "/assets/icons/profile.svg",
  },
  
];

export const plans = [
  {
    _id: 1,
    name: "Free",
    icon: "/assets/icons/free-plan.svg",
    price: 0,
    credits: 20,
    inclusions: [
      {
        label: "20 Free Credits",
        isIncluded: true,
      },
      {
        label: "Basic Access to Services",
        isIncluded: true,
      },
      {
        label: "Priority Customer Support",
        isIncluded: false,
      },
      {
        label: "Priority Updates",
        isIncluded: false,
      },
    ],
  },
  {
    _id: 2,
    name: "Pro Package",
    icon: "/assets/icons/free-plan.svg",
    price: 40,
    credits: 120,
    inclusions: [
      {
        label: "120 Credits",
        isIncluded: true,
      },
      {
        label: "Full Access to Services",
        isIncluded: true,
      },
      {
        label: "Priority Customer Support",
        isIncluded: true,
      },
      {
        label: "Priority Updates",
        isIncluded: false,
      },
    ],
  },
  {
    _id: 3,
    name: "Premium Package",
    icon: "/assets/icons/free-plan.svg",
    price: 199,
    credits: 2000,
    inclusions: [
      {
        label: "2000 Credits",
        isIncluded: true,
      },
      {
        label: "Full Access to Services",
        isIncluded: true,
      },
      {
        label: "Priority Customer Support",
        isIncluded: true,
      },
      {
        label: "Priority Updates",
        isIncluded: true,
      },
    ],
  },
];

export const transformationTypes = {
  restore: {
    type: "restore",
    title: "Restore Image",
    subTitle: "Refine images by removing noise and imperfections",
    config: { restore: true },
    icon: "image.svg",
  },
  removeBackground: {
    type: "removeBackground",
    title: "Background Remove",
    subTitle: "Removes the background of the image using AI",
    config: { removeBackground: true },
    icon: "camera.svg",
  },
  fill: {
    type: "fill",
    title: "Generative Fill",
    subTitle: "Enhance an image's dimensions using AI outpainting",
    config: { fillBackground: true },
    icon: "stars.svg",
  },
  remove: {
    type: "remove",
    title: "Object Remove",
    subTitle: "Identify and eliminate objects from images",
    config: {
      remove: { prompt: "", removeShadow: true, multiple: true },
    },
    icon: "scan.svg",
  },
  recolor: {
    type: "recolor",
    title: "Object Recolor",
    subTitle: "Identify and recolor objects from the image",
    config: {
      recolor: { prompt: "", to: "", multiple: true },
    },
    icon: "filter.svg",
  },

  restyle: {
    type: "restyle",
    title: "Object Style Transformation",
    subTitle: "Identify and style transform the image",
    config: {
      recolor: { prompt: "", to: "", multiple: true },
    },
    icon: "filter.svg",
  },

  enhance: {
    type: "enhance",
    title: "Image Enhance",
    subTitle: "Identify and style transform the image",
    config: {
      recolor: { prompt: "", to: "", multiple: true },
    },
    icon: "filter.svg",
  },

  dynamic: {
    type: "dynamic",
    title: "Dynamic Light",
    subTitle: "Identify and dynamic light transform the image",
    config: {
      art: "",
      // recolor: { prompt: "", to: "", multiple: true },
    },
    icon: "filter.svg",
  },
};

export const aspectRatioOptions = {
  "1:1": {
    aspectRatio: "1:1",
    label: "Square (1:1)",
    width: 1000,
    height: 1000,
  },
  "3:4": {
    aspectRatio: "3:4",
    label: "Standard Portrait (3:4)",
    width: 1000,
    height: 1334,
  },
  "9:16": {
    aspectRatio: "9:16",
    label: "Phone Portrait (9:16)",
    width: 1000,
    height: 1778,
  },
};

export const artStyles = [
  'al_dente', 'athena', 'audrey', 'aurora', 'daguerre', 'eucalyptus', 
  'fes', 'frost', 'hairspray', 'hokusai', 'incognito', 'linen', 
  'peacock', 'primavera', 'quartz', 'red_rock', 'refresh', 'sizzle', 
  'sonnet', 'ukulele', 'zorro'
]


export const defaultValues = {
  title: "",
  aspectRatio: "",
  color: "",
  prompt: "",
  publicId: "",
};

export const creditFee = -1;
