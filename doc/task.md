##DONE##
+ 1. httpNotFound: statusDescription header?
+ 2. mvcController.action http method?
+ 3. implement mvc url helper
+ 5. viewResult
+ 6. mvcView for view engine
+ 7. tempData function
+ 8. xheaders function
+ 9. inject url helper to view engine
+ 10. actions that is not specify a method should accept all method type request
+ 11. controller.destory function
+ 12. Https related: controller&action setting ---> attributes
+ 13. rulee.url
+ 14. vash engine layout function
+ 15. ~/ formater url
+ 16. combine isValidxxxxxx attribute apis?
+ 17. support multi mvc instance
+ 18. caching support multi mvc instance
+ 19. context instance destroy?
+ 20. review every code files, optimize the application initialization
+ 21. new execute action impl flow
+ 22. onException attribute
+ 23. viewResult -> viewEngines.findView -> return detail mvcView, eg: vashView -> which vashView inherit from mvcView -> detail mvcView.render -> end
+ 24. custom controller inject params
+ 25. areas path customizable
+ 26. remove app.current
+ 28. more independence caching solution
+ 29. independence controller inject params solution
+ 30. implement models support: models folder + model define rules.
+ 31. when there are same model name but in different directory, solutions?
+ 36. model binder customizable

##POSTPONE##
+ 4. partialViewResult

##OPTIMIZE##
+ 27. optimize execute action impl flow
+ 35. cache resolveConfig result

##TODO##
+ 32. $ npm install -g cat-mvc-site   $ cat-mvc-site create my_app   $ cd my_app $ npm install   $ npm start
+ 33. use [Formidable](https://github.com/felixge/node-formidable) ?
+ 34. modelState function
+ 37. global filter