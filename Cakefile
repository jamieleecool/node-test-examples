{spawn, exec} = require 'child_process'
sys = require 'util'

printOutput = (process) ->
  process.stdout.on 'data', (data) -> sys.print data
  process.stderr.on 'data', (data) -> sys.print data
  
watchJS = ->
  # coffee = exec 'coffee -r coffeescript-growl -cw -o ./ src/'
  coffee = exec 'coffee -cw -o ./ src/'
  printOutput(coffee)

task 'watch', 'Watches all coffeescript files for changes', ->
  watchJS()
  
task 'compile', 'Compiles all Coffeescript files into JS one shot', ->
 coffee = exec "coffee -c -o ./ src/"
 printOutput(coffee)
  
task 'test', 'Runs all tests', ->
  vows = exec 'vows test/*.test.js'
  printOutput(vows)
  
task 'docs', 'Create documentation using Docco', ->
  docco = exec """
    docco -l parallel src/*.coffee
    docco -l parallel src/lib/*.coffee
    docco -l parallel src/test/*.coffee
  """
  printOutput(docco)
