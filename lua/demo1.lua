name = 'Trevor'

io.write("size of string ", #name, "\n")

-- can change type
name = 4

io.write("my name is ", name, "\n")

bigNum = 99999999999999

io.write("big number ", type(bigNum), "\n")

-- up to 13 digits

floatPrecision = 1.989888888 +0.16799999999

longString = [[
I am a very long
string which
goes on]]

io.write(longString, "\n")

longString = longString .. name

io.write(longString, "\n")

isable = true

io.write(type(isable), "\n")

io.write("math.random(): ", math.random(1,100), "\n")

io.write("time ", math.randomseed(os.time()))

print(string.format("pi = %.10f", math.pi))

age = 13

if age < 16 then
  io.write("attend school\n")
  local localVar = 10
elseif (age >=16) and (age < 18) then
   io.write("attend college", "\n")
end

print(localVar)
print(tostring(isable))

quote = "this is a test string"

io.write("length ", string.len(quote), "\n")

io.write("replace ", string.gsub(quote, " is", " could be"))

io.write("index of password ", string.find(quote, "string"))
print("\n")

i = 1
while(i <=10) do
  io.write(i)
  i=i+1
  if (i>8) then break end
end

for i=1,10,1 do 
  io.write(i)
end

months = {"January", "feb", "mar"}

for key, value in pairs(months) do 
  io.write(value, " ")
end

aTable={}

for i=1,10 do
  aTable[i]=i
end

io.write("table ", aTable[1])
io.write("table size ",#aTable)

function getSum(a, b)
  return a + b
end

print ("total = ", getSum(1,3), "\n");

file = io.open("test.lua", "w+")

file:write("random string of text\n")
file:write("some text\n")

file:seek("set",0)

print(file:read("*a"))

file:close()

mt = {
  __add = function(table1, table2)
  sumTable={}

  for y=1, #table1 do
    if (table1[y] ~= nil) and (table2[y] ~=nil) then
      sumTable[y]=table1[y]+table2[y]
    else
      sumTable[y] = 0
    end
  end
  return sumTable
end,
  __eq = function(table1, table2) 
    return table1.value == table2.value
end,
}

setmetatable (aTable, mt)
print ("are tables equal? " , aTable == aTable)


convertMod = require("convert")
print(string.format("%.3f cm", convertMod.FtToCm(12)))


co = coroutine.create(function()
  for i=1,10,1 do
    print(i)
    print(coroutine.status(co))
    if i==5 then coroutine.yield() end
  end
end)




print(coroutine.status(co))

coroutine.resume(co)
print(coroutine.status(co))

-- unknown number of parms

function getSumMore(...)
  local sum = 0
  for k,v in pairs{...} do 
    sum=sum+v
  end
  return sum
end

print("get larger total ", getSumMore(1,2,3,5), "\n")

repeat
  io.write("enter your guess")
  guess = io.read()
until tonumber(guess)==0




