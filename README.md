# node-helloworld
```
echo -e "line1\nline2" | docker run --rm -i -e "QUERY_STRING=a=titi&b=toto" nanoserverless/node-helloworld
```
Result :
```
## Query String :
{ a: 'titi', b: 'toto' }

## Stdin :
line1
line2
```
