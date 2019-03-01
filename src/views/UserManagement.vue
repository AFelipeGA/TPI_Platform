<template>
  <v-container
    fill-height
    fluid
  >
    <v-layout
      justify-center
      align-center
    >
      <v-flex
        md12
        lg12
      >
        <material-card
          color="orange"
          title="Usuarios"
        >
          <v-data-table
            :headers="headers"
            :items="items"
            hide-actions
          >
            <template
              slot="headerCell"
              slot-scope="{ header }"
            >
              <span
                class="font-weight-light text-warning text--darken-3"
                v-text="header.text"
              />
            </template>
            <template
              slot="items"
              slot-scope="{ item }"
            >
              <td>{{ item.id }}</td>
              <td>{{ item.username }}</td>
              <td>{{ item.email }}</td>
              <td>{{ item.firstname }}</td>
              <td>{{ item.lastname }}</td>
            </template>
          </v-data-table>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  data: () => ({
    headers: [
      {
        sortable: true,
        text: 'ID',
        value: 'id'
      },
      {
        sortable: true,
        text: 'Nombre de Usuario',
        value: 'username'
      },
      {
        sortable: true,
        text: 'Correo Electrónico',
        value: 'email'
      },
      {
        sortable: true,
        text: 'Nombre',
        value: 'firstname'
      },
      {
        sortable: true,
        text: 'Apellido',
        value: 'lastname'
      }
    ],
    items: [
      {
        id: 1,
        username: 'linavejarano',
        email: 'linavejarano@gmail.com',
        firstname: 'Lina',
        lastname: 'Vejarano'
      },
      {
        id: 2,
        username: 'leonardoperez',
        email: 'leonardoperez@gmail.com',
        firstname: 'Leonardo',
        lastname: 'Perez'
      },
      {
        id: 3,
        username: 'rafaelcarvajal',
        email: 'rafaelcarvajal@gmail.com',
        firstname: 'Rafael',
        lastname: 'Carvajal'
      },
      {
        id: 4,
        username: 'dianacastano',
        email: 'dianacastano@gmail.com',
        firstname: 'Diana',
        lastname: 'Castano'
      },
      {
        id: 5,
        username: 'fernandosalazar',
        email: 'fernandosalazar@gmail.com',
        firstname: 'Fernando',
        lastname: 'Salazar'
      }
    ]
  })
}
</script>

<style lang="scss">
  .tim-note {
    bottom: 10px;
    color: #c0c1c2;
    display: block;
    font-weight: 400;
    font-size: 13px;
    line-height: 13px;
    left: 0;
    margin-left: 20px;
    width: 260px;
  }
</style>
