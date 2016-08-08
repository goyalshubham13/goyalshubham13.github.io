System.register(["angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var CourseService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CourseService = (function () {
                function CourseService() {
                    this.courses = [
                        {
                            courseId: 1,
                            name: "The Journey from MVC to Angular",
                            description: "Speeding up your MVC or web form applications is always worthwhile, but seldom easy. However, you can use Angular to make this process easier. In this course, The Journey from MVC to Angular, you're going to learn to slowly convert an MVC webpage to use Angular for all your searching, listing, adding, editing, deleting, and validation of data. First, you'll learn why you need more client side code and how it can benefit you. Then, you'll learn how to add, edit, and delete without postbacks. Finally you'll learn some tips and trick on the validation of data. By the end of this course you'll feel comfortable using Angular to handle standard web page functionality.",
                            author: "Paul D. Sheriff",
                            level: "Beginner",
                            rating: 3,
                            image: "app/assets/images/AngularJS-Flat-Icon-Vector.png",
                            createdOn: "2016-07-21"
                        },
                        {
                            courseId: 2,
                            name: "Angular 2: First Look",
                            description: "This course is a gentle introduction to the changes that Angular 2 brings, how they compare to Angular 1, and provides an understanding of the architecture and how the core concepts work together to build applications. You will learn how your Angular 1 skills translate and prepare you to build Angular 2 applications. Code samples focus on specific features including Angular 2 components, templates directives, data binding syntax, modules, dependency injection, routing, Http, pipes, and services. All samples are written in TypeScript and run live on the web where you can see and edit them with a click of a button; no setup required.",
                            author: "John Papa",
                            level: "Intermediate",
                            rating: 5,
                            image: "app/assets/images/angularjs-hero.jpg",
                            createdOn: "2016-04-01"
                        }
                    ];
                }
                CourseService.prototype.getCourses = function () {
                    return this.courses;
                };
                CourseService.prototype.getCourse = function (id) {
                    var course;
                    course = this.courses.filter(function (course) { return course.courseId === id; })[0];
                    return course;
                };
                CourseService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], CourseService);
                return CourseService;
            }());
            exports_1("CourseService", CourseService);
        }
    }
});
//# sourceMappingURL=Course.service.js.map