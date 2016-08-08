System.register(["angular2/core", 'angular2/router', "./Course.service", "../../shared/pipes/CustomDate.pipe", "../../shared/pipes/CourseFilter.pipe", "../../shared/widgets/stars/Star.component"], function(exports_1, context_1) {
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
    var core_1, router_1, Course_service_1, CustomDate_pipe_1, CourseFilter_pipe_1, Star_component_1;
    var CourseListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (Course_service_1_1) {
                Course_service_1 = Course_service_1_1;
            },
            function (CustomDate_pipe_1_1) {
                CustomDate_pipe_1 = CustomDate_pipe_1_1;
            },
            function (CourseFilter_pipe_1_1) {
                CourseFilter_pipe_1 = CourseFilter_pipe_1_1;
            },
            function (Star_component_1_1) {
                Star_component_1 = Star_component_1_1;
            }],
        execute: function() {
            CourseListComponent = (function () {
                function CourseListComponent(_courseService) {
                    this._courseService = _courseService;
                }
                CourseListComponent.prototype.ngOnInit = function () {
                    this.courses = this._courseService.getCourses();
                    console.log(this.courses);
                };
                CourseListComponent.prototype.onRatingClicked = function (message) {
                    alert(message);
                };
                CourseListComponent = __decorate([
                    core_1.Component({
                        templateUrl: "app/components/courses/course-list.component.html",
                        pipes: [CustomDate_pipe_1.CustomDatePipe, CourseFilter_pipe_1.CourseFilterPipe],
                        directives: [Star_component_1.StarComponent, router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [Course_service_1.CourseService])
                ], CourseListComponent);
                return CourseListComponent;
            }());
            exports_1("CourseListComponent", CourseListComponent);
        }
    }
});
//# sourceMappingURL=course-list.component.js.map