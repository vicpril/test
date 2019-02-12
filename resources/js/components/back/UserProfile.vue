<template>
<div>
    <div class="row">
          <div class="col-md-8">
            <div class="card">
              <div class="card-header">
                <h5 class="title  mb-0">Персональные данные</h5>
              </div>
              <div class="card-body">
              
                  <div class="row">
                    <div class="col-md-8 col-sm-7 col-xs-7">
                      <div class="form-group">
                        <label class="h6">Полное имя</label>
                        <input type="text" 
															 class="form-control mr-2" 
															 name="full_name" 
															 placeholder="Ф.И.О." 
															 v-model="user.full_name" 
															 required >
                      </div>
                    </div>
                    <div class="col-md-4 col-sm-5 col-xs-5 text-right">
                      <label class="d-block">Автозаполнение</label>
                      <button type="button" 
															class="btn btn-primary btn-simple btn-round py-2 my-0" 
															@click="autocomplite">Заполнить</button>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-7 pr-1">
                      <div class="form-group">
                        <label class="h6" for="email">Email</label>
                        <input type="email" 
															 class="form-control" 
															 name="email" 
															 placeholder="Email" 
															 v-model="user.email" 
															 required>
													<div class="invalid-feedback">
													</div>
                      </div>
                    </div>
                    <div class="col-md-5 pl-1">
                      <div class="form-group">
                        <label class="h6" for="alias">Логин</label>
                        <input type="text" 
															 class="form-control" 
															 name="alias" 
															 v-model="user.alias" 
															 :disabled="id">
													<div class="invalid-feedback">
													</div>
											</div>
                    </div>
                  </div>
                
                  <label class="h6 mt-2">Данные на русском</label>
                  <div class="row">
                    <div class="col-md-4 pr-1">
                      <div class="form-group">
                        <label for="last_name_ru">Фамилия</label>
                        <input type="text" 
															 class="form-control" 
															 name="last_name_ru"  
															 v-model="user.last_name_ru" >
                      </div>
                    </div>
                    <div class="col-md-3 px-1">
                        <label for="first_name_ru">Имя</label>
                        <input type="text" 
															 class="form-control" 
															 name="first_name_ru" 
															 v-model="user.first_name_ru">
                    </div>
                    <div class="col-md-3 px-1">
                        <label for="patronymic_ru">Отчество</label>
                        <input type="text" 
															 class="form-control" 
															 name="patronymic_ru" 
															 v-model="user.patronymic_ru">                
                    </div>
                    <div class="col-md-2 pl-1">
                        <label for="initials_ru">Инициалы</label>
                        <input type="text" 
															 class="form-control" 
															 name="initials_ru" 
															 v-model="user.initials_ru">                
                    </div>
                  </div>
                
                  <label class="h6 mt-2">Данные на английском</label>
                  <div class="row">
                    <div class="col-md-4 pr-1">
                      <div class="form-group">
                        <label for="last_name_en">Last Name</label>
                        <input type="text" 
															 class="form-control" 
															 name="last_name_en" 
															 v-model="user.last_name_en">
                      </div>
                    </div>
                    <div class="col-md-3 px-1">
                        <label for="first_name_en">First Name</label>
                        <input type="text" 
															 class="form-control" 
															 name="first_name_en" 
															 v-model="user.first_name_en">
                    </div>
                    <div class="col-md-3 px-1">
                        <label for="patronymic_en">Middle Name</label>
                        <input type="text" 
															 class="form-control" 
															 name="patronymic_en" 
															 v-model="user.patronymic_en">                
                    </div>
                    <div class="col-md-2 pl-1">
                        <label for="initials_en">Initials</label>
                        <input type="text" 
															 class="form-control" 
															 name="initials_en" 
															 v-model="user.initials_en">                
                    </div>
                  </div>
								
								<label class="h6 mt-2">ORCID</label>
                  <div class="row">
                    <div class="col-md-7 pr-1">
                      <div class="form-group">
                        <input type="text" 
															 class="form-control" 
															 name="orcid"  
															 v-model="user.orcid">
                      </div>
                    </div>
								</div>
              </div>
            </div>
						
						<div class="card">
              <div class="card-header">
                <h5 class="title mb-0">Сведения о месте работы</h5>
              </div>
              <div class="card-body">
								 <label class="h6 mt-2">Степень и звание</label>
                  <div class="row">
                    <div class="col-md-6 pr-1">
                      <div class="form-group">
                        <label for="graduate_ru">На русском</label>
                        <input type="text" 
															 class="form-control" 
															 name="graduate_ru" 
															 v-model="user.graduate_ru" >
                      </div>
                    </div>
                    <div class="col-md-6 pl-1">
                        <label for="graduate_en">На английском</label>
                        <input type="text" 
															 class="form-control" 
															 name="graduate_en" 
															 v-model="user.graduate_en" >
                    </div>
									</div>
									
								<label class="h6 mt-3">Место работы (должность)</label>
								<div class="row">
									<div class="col-12">
									
										<table class="table table-striped table-bordered table-responsive-md" style="width:100%" id="jobsTable">
											<thead>
												<th class=""></th>
												<th class="">На русском</th>
												<th class="">На английском</th>
											</thead>
											<tbody>
                        <tr>
													<td>1</td>
                          <td>Русское название 111</td>
                          <td>Английское название 111</td>
                        </tr>
                        <tr>
													<td>22</td>
                          <td>Русское название 2222</td>
                          <td>Английское название 2222</td>
                        </tr>
                        <tr>
													<td>2</td>
                          <td>Русское название 33</td>
                          <td>Английское название 333</td>
                        </tr>
												<tr>
													<td>24</td>
                          <td>Русское название 44</td>
                          <td>Английское название 444</td>
                        </tr>
											</tbody>
										</table>
									</div>
								</div>
								
								
							</div>
						</div>
						
						<div class="card">
              <div class="card-header">
                <h5 class="title mb-0">Биография</h5>
              </div>
              <div class="card-body">
								<div class="col-md-12">
									<div class="row">
										<div class="form-group">
											<label class="h6">На русском</label>
											<textarea name="description_ru" 
																id="" cols="100" rows="3" 
																class="form-control description"
																v-model="user.description_ru" ></textarea>
										</div>
									</div>
								</div>
								
								<div class="col-md-12">
									<div class="row">
										<div class="form-group">
											<label class="h6 mt-2">На английском</label>
											<textarea name="description_en" 
																id="" cols="100" rows="3" 
																class="form-control description"
																v-model="user.description_en" ></textarea>
										</div>
									</div>
								</div>
								
							</div>
						</div>
						
          </div>
      
          <div class="col-md-4">
            
            <div class="card">
                <div class="card-header">
                  <h6>Сохранить изменения</h6>
                </div>
              <div class="card-body">
                <input class="btn btn-primary btn-round btn-block" type="submit" value="Сохранить">
              </div>
            </div>
            
            <div class="card" id="photoCard">
                    <div class="card-header">
                      <h6>Фотография</h6>
                    </div>
              
                  <div class="card-body">
                    
                    <div class="d-none" id="image">
                      <img src="" alt="">
                      <label><a href="#" class="text-info text-center p-1" id="destroyImage">Поменять фотографию</a></label>
                    </div>
										
                    <div class="text-center" id="downloadImage">
                      <label class="d-block mb-0">Фотография не загружена</label>
                      <button type="button" class="btn btn-sm btn-primary btn-simple btn-round" data-toggle="modal" data-target="#setFileModal">Загрузить</button>
                    </div>
                    <input type="text" class="d-none" name="avatar" value="">
                  </div>
            </div>
          </div>
        </div>      


  </div>
  
</template>

<script>
  export default {
    props: [
			'old',
			'id',
// 			'user'
		],
		
		data: function() {
			return {
				user: {}
			}
		},
		
    created: function() {
      if(this.old.length !== 0) {
				this.user = this.old;
			} else if (this.id) {
				this.fetch(this.id);
			}
    },
		
		methods: {
      fetch(id) {
        axios.get('/api/users/'+id).then( ({data}) => {
//           console.log(data);
          this.user = data.data;
        });
      },
			
			autocomplite() {
				
			}
    },
  }

</script>