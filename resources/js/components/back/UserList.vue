<template>
  <div>
    <table class="table table-striped table-bordered table-responsive-md" style="width:100%" id="users-table">
      <thead class="text-primary">
        <tr>
          <th>Автор</th>
          <th>Eng</th>
          <th>E-mail</th>
          <th>Роль</th>
          <th>Статьи</th>
        </tr>
      </thead>
      <tbody>

<!--         @foreach($users as $user) -->
          <tr v-for="(user, index) in users">
            <td v-html="user.editLink"></td>
            <td>{{ user.meta[1].last_name }} {{ user.meta[1].initials }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.role }}</td>
            <td>{{ user.articles }}</td>
          </tr>
<!--         @endforeach  -->

      </tbody>
    </table>
  </div>
</template>

<script>
  $(document).ready(function () {
    // DataTable - initiate
    
  });

  export default {
    data() {
      return {
        users : [],
      }
    },
    
    created: function() {
      this.fetch();
    },
    
    methods: {
      fetch() {
        axios.get('/api/users').then( ({data}) => {
          console.log(data);
          this.users = data.data;
          
        }).then( () => {
          this.dataTableInit(); 
        });
      },
      
      dataTableInit() {
        $('#users-table').DataTable({
          "language": {
                "url": "/dataTables.russian.lang"
          },
        });
      },
    },
    
  }

</script>