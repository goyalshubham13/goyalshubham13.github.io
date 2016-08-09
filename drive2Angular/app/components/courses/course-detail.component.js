System.register(["angular2/core", "angular2/router", "./course.service", "../../shared/widgets/stars/Star.component", "../../shared/pipes/CustomDate.pipe"], function(exports_1, context_1) {
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
    var core_1, router_1, course_service_1, Star_component_1, CustomDate_pipe_1;
    var CourseDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (course_service_1_1) {
                course_service_1 = course_service_1_1;
            },
            function (Star_component_1_1) {
                Star_component_1 = Star_component_1_1;
            },
            function (CustomDate_pipe_1_1) {
                CustomDate_pipe_1 = CustomDate_pipe_1_1;
            }],
        execute: function() {
            CourseDetailComponent = (function () {
                function CourseDetailComponent(_routeParams, _courseService, _router) {
                    this._routeParams = _routeParams;
                    this._courseService = _courseService;
                    this._router = _router;
                    this.courseId = 0;
                }
                CourseDetailComponent.prototype.ngOnInit = function () {
                    this.courseId = +this._routeParams.get("id");
                    this.course = this._courseService.getCourse(this.courseId);
                    console.log(this.course);
                };
                CourseDetailComponent.prototype.back = function () {
                    this._router.navigate(['Courses']);
                };
                CourseDetailComponent = __decorate([
                    core_1.Component({
                        templateUrl: "app/components/courses/course-detail.component.html",
                        styleUrls: ["app/components/courses/course-detail.component.css"],
                        directives: [Star_component_1.StarComponent],
                        pipes: [CustomDate_pipe_1.CustomDatePipe]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, course_service_1.CourseService, router_1.Router])
                ], CourseDetailComponent);
                return CourseDetailComponent;
            }());
            exports_1("CourseDetailComponent", CourseDetailComponent);
        }
    }
});
//# sourceMappingURL=course-detail.component.js.map