/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
  {
    path: '/dashboard',
    // Relative to /src/views
    view: 'Dashboard'
  },
  {
    path: '/user-profile',
    name: 'Perfil de usuario',
    view: 'UserProfile'
  },
  {
    path: '/machines',
    name: 'Control de máquinas',
    view: 'Machines'
  },
  {
    path: '/reports',
    name: 'Reportes',
    view: 'Reports'
  },
  {
    path: '/user-management',
    name: 'Gestión de usuarios',
    view: 'UserManagement'
  },
  {
    path: '/notifications',
    name: 'Notificaciones',
    view: 'Notifications'
  }
]
