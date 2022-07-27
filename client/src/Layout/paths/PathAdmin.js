import {SubjectOutlined, AddCircleOutlineOutlined,VisibilityOutlined} from '@mui/icons-material'


const pathAdmin=[
    {
        text: "Lista de items",
        icon:<SubjectOutlined color="secondary"/>,
        path: "/admin/list"
    },{
        text: "Añadir item",
        icon: <AddCircleOutlineOutlined color="secondary"/>,
        path: "/admin/add"
    },
    {
        text: "Vistas de VR",
        icon: <VisibilityOutlined color="secondary"/>,
        path: "/admin/vr"
    }
]

export default pathAdmin;