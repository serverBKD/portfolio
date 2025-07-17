import type {DataTech, Tasks} from '../types/types'

export const language: DataTech[] = [
  {
    id: 0,
    lang: "javascript",
    img: "/assets/techs/langs/icons8-js.svg"
  },
  {
    id: 1,
    lang: "typescript",
    img: "/assets/techs/langs/icons8-typescript.svg"
  },
  {
    id: 2,
    lang: "nodejs",
    img: "/assets/techs/langs/icons8-nodejs.svg"
  },
  {
    id: 3,
    lang: "reactjs",
    img: "/assets/techs/langs/icons-react-native-96.svg"
  },
  {
    id: 4,
    lang: "nextjs",
    img: "/assets/techs/langs/icons8-nextjs.svg"
  },
  {
    id: 5,
    lang: "vuejs",
    img: "/assets/techs/langs/icons8-vuejs.svg"
  },
  {
    id: 6,
    lang: "python",
    img: "/assets/techs/langs/icons8-python.svg"
  },
]

export const database: DataTech[] = [
  {
    id: 0,
    lang: "firebase",
    img: "/assets/techs/db/icons8-firebase-96.png"
  },
  {
    id: 1,
    lang: "postgresql",
    img: "/assets/techs/db/icons8-postgresql-96.png"
  },
  {
    id: 2,
    lang: "mongodb",
    img: "/assets/techs/db/icons8-mongodb-96.png"
  },
  {
    id: 3,
    lang: "mysql",
    img: "/assets/techs/db/icons8-mysql.svg"
  },
    {
    id: 4,
    lang: "supabase",
    img: "/assets/techs/db/supabase-logo-wordmark--dark.svg"
  },
  // supabase-logo-wordmark--dark.svg
]

export const systems: DataTech[] = [
    {
    id: 0,
    lang: "linux-ubuntu",
    img: "/assets/techs/systems/1-Ubuntu.svg"
  },
  {
    id: 1,
    lang: "windows64",
    img: "/assets/techs/systems/3-Windows.svg"
  },
  {
    id: 2,
    lang: "docker",
    img: "/assets/techs/systems/11-Docker.svg"
  },
  {
    id: 3,
    lang: "git",
    img: "/assets/techs/systems/1-git.svg"
  },
    {
    id: 4,
    lang: "odoo",
    img: "/assets/techs/systems/10-Odoo.svg"
  },
]

export const tasks: Tasks[] = [
  {
    id: 91,
    concept: "socio",
    notes: "",
    amount: -12,
    img: "",
    completed: false,
    debit: true,
    initAt: "12JUL25",
    source: "form-task",
    createdAt: "2025-07-12T23:38:44.531Z",
    updatedAt: "2025-07-12T23:38:44.531Z",
  },
  {
    id: 92,
    concept: "reactNative",
    notes: null,
    amount: 0,
    img: "",
    completed: false,
    debit: false,
    initAt: "12JUL25",
    source: "form-task",
    createdAt: "2025-07-13T03:44:51.172Z",
    updatedAt: "2025-07-13T03:44:51.172Z"
  },
  {
    id: 93,
    concept: "Nnejj",
    notes: null,
    amount: 0,
    img: "",
    completed: true,
    debit: false,
    initAt: "13JUL25",
    source: "form-task",
    createdAt: "2025-07-13T05:16:23.783Z",
    updatedAt: "2025-07-13T05:16:31.499Z",
  },
  {
    id: 89,
    concept: "te amo",
    notes: null,
    amount: 0,
    img: "https://firebasestorage.googleapis.com/v0/b/serverbkd-trifaxic-ts.appspot.com/o/tasks-t8%2Ftasks-app-1752363255221-formTask-hanyu-logo.jpeg?alt=media&token=b0d06b3c-fafe-4954-a063-821c3c13808d",
    completed: true,
    debit: false,
    initAt: "12JUL25",
    source: "form-task",
    createdAt: "2025-07-12T23:34:18.730Z",
    updatedAt: "2025-07-13T05:16:38.480Z",
  },
  {
    id: 94,
    concept: "kara sevda",
    notes: null,
    amount: 0,
    img: "",
    completed: false,
    debit: false,
    initAt: "14JUL25",
    source: "form-task",
    createdAt: "2025-07-15T01:57:36.288Z",
    updatedAt: "2025-07-15T01:57:36.288Z",
  }
]
