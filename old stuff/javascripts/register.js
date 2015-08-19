(function(window, document) {
    define([], function() {
        return function($scope, $http, $rootScope, $routeParams, $location, api, config, user, questions) {
            $scope.page = $routeParams.i ? parseInt($routeParams.i) : 0;
            console.log(user.user_type);
            if (user.accountsetup > 0) {
                $location.path('/dashboard');
            }
            $scope.years = ['7th grade', '8th grade', Freshman', 'Sophomore'];
          
          
            console.log(questions);
            $scope.user_type = user.user_type;
            $scope.formmodel = user.user_type == "mentee" ?
            [
            {
                type: "tagtree", fieldname: "profiledata", prompt: "What are some hobbies??", placeholder: "clubs, sports...", strict: false, table: "tags"
            },
            {
                type: "dropdown", options: $scope.years, fieldname: "gradyear", prompt: "What year will you graduate high school?", placeholder: ""
            },
            
            {
                type: "hometown", options: $scope.hometown, fieldname: "hometown", prompt: "What's the name of your hometown?", placeholder: "e.g. East Palo Alto"
            },
            {
                type: "textarea", fieldname: "bio", prompt: "Write a quick bio to let us get to know you.", placeholder: "e.g. Hi, I'm Morgan! I'm from EPA, and enjoy playing games and watching soccer.", limit: 1000
            },
            {
                type: "date", fieldname: "birthday", prompt: "Birthday:", placeholder: "mm/dd/yyyy"
            },
            {
                type: "photo", fieldname: "propic", prompt: "Upload a profile picture.", placeholder: ""
            }
            ] : [
            {
                type: "date",
                fieldname: "birthday",
                prompt: "Birthday:",
                placeholder: "mm/dd/yyyy"
            },
            {
                type: "tagtree",
                fieldname: "tags",
                prompt: "What Are Activities You Are Interested in Doing in College",
                placeholder: "",
                strict: false,
                table: "tags"
            },
            {
                type: "dropdown",
                options: $scope.years,
                fieldname: "gradyear",
                prompt: "What year are you?",
                placeholder: ""
            },
            {
                type: "location",
                states: $scope.states,
                countries: $scope.countries,
                fieldname: "place",
                prompt: "Where are you from?",
                placeholder: ""
            },
            {
                type: "hometown",
                options: $scope.hometown,
                fieldname: "hometown",
                prompt: "What's the name of your hometown?",
                placeholder: "e.g. San Francisco"
            },
            {
                type: "photo",
                fieldname: "propic",
                prompt: "Upload a profile picture.",
                placeholder: ""
            }
            ];

            $scope.formSubmit = user.user_type == "mentor" ?
            function() {
                $scope.questions = [
                ];

                $scope.formdata = {
                    'bio' : $scope.formmodel[7].data,
                    'place' : $scope.formmodel[5].data,
                    'hometown' : $scope.formmodel[6].data,
                    'propic' : $scope.formmodel[9].data,
                    'yearid' : $scope.formmodel[4].data,
                    'bday' : $scope.formmodel[8].data,
                    'profiledata' : JSON.stringify($scope.formmodel[2].tags),
                    'interests' : JSON.stringify($scope.formmodel[3].tags),
                    'questions' : JSON.stringify($scope.questions)
                }
                console.log($scope.formdata);

                console.log($scope.questions);
                $http.post(config.apihandle + "profile.php", $scope.formdata)
                .then(function(res) {
                    console.log(res.data);
                    if (res.data._id) {
                        location.reload();
                    }
                })
            } :
            function() {
                $scope.questions = [
                ];

                $scope.formdata = {
                    'bday' : $scope.formmodel[0].data,
                    'type' : 'prospie',
                    'major' : JSON.stringify($scope.formmodel[1].data),
                    'profiledata' : JSON.stringify($scope.formmodel[2].data),
                    'yearid' : $scope.formmodel[3].data,
                    'place' : $scope.formmodel[4].data,
                    'hometown' : $scope.formmodel[5].data,
                    'threewords' : $scope.formmodel[6].data,
                    'propic' : $scope.formmodel[7].data
                }
                console.log($scope.formdata);
                $http.post(config.apihandle + "profile.php", $scope.formdata)
                .then(function(res) {
                    console.log(res.data);
                    if (res.data._id) {
                        location.reload();
                    }
                })
            };

            $scope.resource = {
                load: function() {
                    api.resources.getMajors(0, 100)
                    .then(function(res) {
                        this.data.concat(res.data);
                    });
                },
                data: []
            }

            //    $scope.getQuestions = function(){
            //        var q = []
            //        for(var i = 0; i < 5; i++){
            //            var index = Math.floor(Math.random()*($scope.questionpool.length - 1));
            //            q.push({question: $scope.questionpool[index], ans:""});

            //            $scope.questionpool.splice(index, 1);
            //        }
            //        return q;
            //    }

            $scope.tagFilter = function(tag, input) {
                return tag.match(new RegExp(".*" + input + ".*", "i"));
            }

            // $scope.formdata = $routeParams.formdata ? JSON.parse(decodeURI($routeParams.formdata)) :
            //     {
            //         yearid: new Date().getFullYear() + 4,
            //         biography: $scope.getQuestions(),
            //         accountsetup: 1
            //     }


            $scope.submit = function() {
                $http.post(config.apihandle + "profile.php", $scope.formdata)
                .then(function(res) {
                    location.reload();
                });
            }

            $scope.set = function() {
                $scope.setaccount = true;
            }

        }
    })
})(window, document);


