<template>
	<div>
		<div class="row">
			<div class="col-md-8">
				<div class="card">
					<div class="card-header">
						<h5 class="h5 mb-0">Персональные данные</h5>
					</div>
					<div class="card-body">
						<div class="row">
							<div class="col-md-8 col-sm-7 col-xs-7">
								<div class="form-group">
									<label class="h6">Полное имя</label>
									<input
										type="text"
										class="form-control mr-2"
										name="full_name"
										placeholder="Ф.И.О."
										v-model="user.full_name"
										required
									>
								</div>
							</div>
							<div class="col-md-4 col-sm-5 col-xs-5 text-right">
								<label class="d-block text-muted">Автозаполнение</label>
								<button
									type="button"
									class="btn btn-outline-info btn-pill my-0"
									@click="autocomplite"
								>Заполнить</button>
							</div>
						</div>

						<div class="row">
							<div class="col-md-7 pr-1">
								<div class="form-group">
									<label class="h6" for="email">Email</label>
									<input
										type="email"
										class="form-control"
										name="email"
										placeholder="Email"
										v-model="user.email"
										required
									>
									<div class="invalid-feedback"></div>
								</div>
							</div>
							<div class="col-md-5 pl-1">
								<div class="form-group">
									<label class="h6" for="alias">Логин</label>
									<input type="text" class="form-control" name="alias" v-model="user.alias" :disabled="id">
									<div class="invalid-feedback"></div>
								</div>
							</div>
						</div>
						<label class="h6 text-muted mt-2 mb-1">Данные на русском</label>
						<div class="row">
							<div class="col-4 pr-1">
								<div class="form-group">
									<label for="last_name_ru">Фамилия</label>
									<input type="text" class="form-control" name="last_name_ru" v-model="user.last_name_ru">
								</div>
							</div>
							<div class="col-3 px-1">
								<div class="form-group">
									<label for="first_name_ru">Имя</label>
									<input type="text" class="form-control" name="first_name_ru" v-model="user.first_name_ru">
								</div>
							</div>
							<div class="col-3 px-1">
								<div class="form-group">
									<label for="patronymic_ru">Отчество</label>
									<input type="text" class="form-control" name="patronymic_ru" v-model="user.patronymic_ru">
								</div>
							</div>
							<div class="col-2 pl-1">
								<div class="form-group">
									<label for="initials_ru">Инициалы</label>
									<input type="text" class="form-control" name="initials_ru" v-model="user.initials_ru">
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-4 pr-1">
								<div class="form-group">
									<label for="short_name_ru">Короткое имя</label>
									<input type="text" class="form-control" name="short_name_ru" v-model="user.short_name_ru">
								</div>
							</div>
						</div>

						<label class="h6 text-muted mt-2 mb-1">Данные на английском</label>
						<div class="row">
							<div class="col-4 pr-1">
								<div class="form-group">
									<label for="last_name_en">Last Name</label>
									<input type="text" class="form-control" name="last_name_en" v-model="user.last_name_en">
								</div>
							</div>
							<div class="col-3 px-1">
								<div class="form-group">
									<label for="first_name_en">First Name</label>
									<input type="text" class="form-control" name="first_name_en" v-model="user.first_name_en">
								</div>
							</div>
							<div class="col-3 px-1">
								<div class="form-group">
									<label for="patronymic_en">Middle Name</label>
									<input type="text" class="form-control" name="patronymic_en" v-model="user.patronymic_en">
								</div>
							</div>
							<div class="col-2 pl-1">
								<div class="form-group">
									<label for="initials_en">Initials</label>
									<input type="text" class="form-control" name="initials_en" v-model="user.initials_en">
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-4 pr-1">
								<div class="form-group">
									<label for="short_name_en">Short name</label>
									<input type="text" class="form-control" name="short_name_en" v-model="user.short_name_en">
								</div>
							</div>
						</div>

						<div class="row">
							<div class="col-md-7 pr-1">
								<div class="form-group">
									<label class="h6 mt-2">ORCID</label>
									<input type="text" class="form-control" name="orcid" v-model="user.orcid">
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="card">
					<div class="card-header">
						<h5 class="h5 mb-0">Сведения о месте работы</h5>
					</div>
					<div class="card-body">
						<label class="h6 text-muted mt-2">Степень и звание</label>
						<div class="row">
							<div class="col-md-6 pr-1">
								<div class="form-group">
									<label for="degree_ru">На русском</label>
									<input type="text" class="form-control" name="degree_ru" v-model="user.degree_ru">
								</div>
							</div>
							<div class="col-md-6 pl-1">
								<div class="form-group">
									<label for="degree_en">На английском</label>
									<input type="text" class="form-control" name="degree_en" v-model="user.degree_en">
								</div>
							</div>
						</div>

						<label class="h6 text-muted mt-3">Место работы (должность)</label>
						<div class="row">
							<div class="col-12">
								<table class="table table-hover table-responsive-md" style="width:100%" id="jobsTable">
									<thead class="bg-secondary">
										<th class></th>
										<th class="text-muted">На русском</th>
										<th class="text-muted">На английском</th>
										<th class></th>
									</thead>
									<draggable tag="tbody" handle=".handle" :list="jobs">
										<tr class v-for="(job, index) in jobs" :key="index">
											<td class="handle">
												<i class="fa fa-align-justify"></i>
											</td>
											<td class="p-1">
												<textarea type="text" class="form-control" v-model="job.ru" @input="saveJobsIntoUser"></textarea>
											</td>
											<td class="p-1">
												<textarea type="text" class="form-control" v-model="job.en" @input="saveJobsIntoUser"></textarea>
											</td>
											<td class="text-muted">
												<i
													class="fa fa-close"
													@mouseover="$event.target.classList.add('text-danger')"
													@mouseout="$event.target.classList.remove('text-danger')"
													@click="deleteJob(index)"
												></i>
											</td>
										</tr>
									</draggable>
								</table>
								<button
									type="button"
									class="btn btn-outline-info btn-sm"
									@click="addJob"
								>Добавить место работы</button>
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
									<textarea
										name="description_ru"
										id
										cols="100"
										rows="3"
										class="form-control description"
										v-model="user.description_ru"
									></textarea>
								</div>
							</div>
						</div>

						<div class="col-md-12">
							<div class="row">
								<div class="form-group">
									<label class="h6 mt-2">На английском</label>
									<textarea
										name="description_en"
										id
										cols="100"
										rows="3"
										class="form-control description"
										v-model="user.description_en"
									></textarea>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="col-md-4">
				<div class="card">
					<div class="card-header">
						<h5>Сохранить изменения</h5>
					</div>
					<div class="card-body">
						<input class="btn btn-primary btn-round btn-block" type="submit" value="Сохранить">
					</div>
				</div>

				<div class="card" id="photoCard">
					<div class="card-header">
						<h5>Фотография</h5>
					</div>

					<div class="card-body">
						<div class="d-none" id="image">
							<img src alt>
							<label>
								<a href="#" class="text-info text-center p-1" id="destroyImage">Поменять фотографию</a>
							</label>
						</div>

						<div class="text-center" id="downloadImage">
							<label class="d-block mb-0">Фотография не загружена</label>
							<button
								type="button"
								class="btn btn-sm btn-primary btn-simple btn-round"
								data-toggle="modal"
								data-target="#setFileModal"
							>Загрузить</button>
						</div>
						<input type="text" class="d-none" name="avatar" value>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import translat from "../translat";
import draggable from "vuedraggable";

export default {
	props: [
		"old",
		"id"
		// 			'user'
	],

	data: function() {
		return {
			user: {},
			jobs: [
				// {
				// 	// id: 1,
				// 	ru: "Русское название 111",
				// 	en: "Английское название 111"
				// },
				// {
				// 	// id: 2,
				// 	ru: "Русское название 2",
				// 	en: "Английское название 2"
				// },
				// {
				// 	// id: 3,
				// 	ru: "Русское название 33",
				// 	en: "Английское название 333"
				// },
				// {
				// 	// id: 4,
				// 	ru: "Русское название 4",
				// 	en: "Английское название 4444"
				// }
			]
		};
	},

	created: function() {
		if (this.old.length !== 0) {
			this.user = this.old;
		} else if (this.id) {
			this.fetch(this.id);
		} else {
			this.user = {};
		}
	},
	watch: {
		jobs: function(value, oldValue) {
			this.saveJobsIntoUser();
		}
	},

	methods: {
		fetch(id) {
			axios.get("/api/users/" + id).then(({ data }) => {
				//           console.log(data);
				this.user = data.data;
				this.jobs = this.getUserJobs(data.data);
			});
		},

		getUserJobs(user) {
			var res = [];
			if (user.jobs_ru) {
				user.jobs_ru.forEach((el, i) => {
					res.push({
						ru: user.jobs_ru[i],
						en: user.jobs_en[i]
					});
				});
			}
			return res;
		},

		saveJobsIntoUser() {
			var ru = [];
			var en = [];
			this.jobs.forEach(el => {
				ru.push(el.ru);
				en.push(el.en);
			});
			this.user.jobs_ru = ru;
			this.user.jobs_en = en;
		},

		addJob() {
			const new_id = this.jobs.length + 1;
			this.jobs.push({
				// id: new_id,
				ru: "",
				en: ""
			});
		},

		deleteJob(index) {
			if (confirm("Удалить место работы?")) {
				this.jobs.splice(index, 1);
			}
		},

		autocomplite() {
			const name = this.user.full_name.split(" ", 3);

			this.user.email =
				translat.strtr(
					translat.translat(this.user.full_name.toString().toLowerCase()),
					{
						" ": "-",
						".": "-"
					}
				) + "@localhost.lo";
			var f_name, l_name, pat, ini;
			switch (name.length) {
				case 1:
					l_name = name[0];
					break;
				case 2:
					l_name = name[0];
					name[1] = name[1].split(".");
					if (name[1].length == 1) {
						f_name = name[1][0];
						ini = f_name.split("")[0] + ".";
					} else {
						f_name = name[1][0];
						pat = name[1][1];
						ini = f_name.split("")[0] + "." + pat.split("")[0] + ".";
					}
					break;
				case 3:
					l_name = name[0];
					f_name = name[1];
					pat = name[2];
					ini = f_name.split("")[0] + "." + pat.split("")[0] + ".";
					break;
			}

			if (f_name) {
				this.user.first_name_ru = f_name;
				this.user.first_name_en = translat.translat(f_name);
			} else {
				this.user.first_name_ru = "";
				this.user.first_name_en = "";
			}

			if (l_name) {
				this.user.last_name_ru = l_name;
				this.user.last_name_en = translat.translat(l_name);
			} else {
				this.user.last_name_ru = "";
				this.user.last_name_en = "";
			}

			if (pat) {
				this.user.patronymic_ru = pat;
				this.user.patronymic_en = translat.translat(pat);
			} else {
				this.user.patronymic_ru = "";
				this.user.patronymic_en = "";
			}
			if (ini) {
				this.user.initials_ru = ini;
				this.user.initials_en = translat.translat(ini);
				this.user.short_name_ru = l_name + " " + ini;
				this.user.short_name_en = translat.translat(l_name + " " + ini);
			} else {
				this.user.initials_ru = "";
				this.user.initials_en = "";
				this.user.short_name_ru = l_name;
				this.user.short_name_en = translat.translat(l_name);
			}
		}
	},

	components: {
		draggable
	}
};
</script>