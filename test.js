const pki = require('node-forge').pki;


const certPem = `
-----BEGIN CERTIFICATE-----
MIIFRzCCBC+gAwIBAgIUUWBUWVB0Ic37n4d+PGql194axvowDQYJKoZIhvcNAQEL
BQAwgZAxCzAJBgNVBAYTAklUMQ4wDAYDVQQIDAVNaWxhbjEOMAwGA1UEBwwFTWls
YW4xEzARBgNVBAoMCm5vZGUtb3BjdWExEzARBgNVBAMMCm5vZGUtb3BjdWExIjAg
BgkqhkiG9w0BCQEWE2luZm9Abm9kZS1vcGN1YS5jb20xEzARBgNVHREMCkBhbHRf
bmFtZXMwHhcNMjAwNDA3MTQzMDA4WhcNMjEwNDA3MTQzMDA4WjCBkDELMAkGA1UE
BhMCSVQxDjAMBgNVBAgMBU1pbGFuMQ4wDAYDVQQHDAVNaWxhbjETMBEGA1UECgwK
bm9kZS1vcGN1YTETMBEGA1UEAwwKbm9kZS1vcGN1YTEiMCAGCSqGSIb3DQEJARYT
aW5mb0Bub2RlLW9wY3VhLmNvbTETMBEGA1UdEQwKQGFsdF9uYW1lczCCASIwDQYJ
KoZIhvcNAQEBBQADggEPADCCAQoCggEBAM496emiIml1m9gcM0jg9r4iY6qAgvJv
JMGC2NfiV9zn/li5SD2sxjDdh+z8ygvMp8zamDazq1zpf8GgRcSUEN4x/HABQgxu
UuNrWOXKeFgjMaZQlsgaQGNIeAz8nWo14SarlZC7T7NFDyPF6IEkK8/9rWTZRisd
xYXArXoCZ2WV5eyBycN0FXBanaMeNCGdm/RvJkBxuZ/mCfPOS5X/IHmKxOu745R/
qt59neSDS55Viph8v+a1J+oKOIIsoioe2CATRA1ZGg0zH+8Xbi84O3xoL/CoONxQ
ut+8Pmqbrk0BClcfBS2Ic0RtXLEKAjJNDuKOYvdySceFMwLfCQBHvUkCAwEAAaOC
AZUwggGRMB0GA1UdDgQWBBT3d3XWgpuporHTJSwXPKSuCiwu3jCB0AYDVR0jBIHI
MIHFgBT3d3XWgpuporHTJSwXPKSuCiwu3qGBlqSBkzCBkDELMAkGA1UEBhMCSVQx
DjAMBgNVBAgMBU1pbGFuMQ4wDAYDVQQHDAVNaWxhbjETMBEGA1UECgwKbm9kZS1v
cGN1YTETMBEGA1UEAwwKbm9kZS1vcGN1YTEiMCAGCSqGSIb3DQEJARYTaW5mb0Bu
b2RlLW9wY3VhLmNvbTETMBEGA1UdEQwKQGFsdF9uYW1lc4IUUWBUWVB0Ic37n4d+
PGql194axvowPQYDVR0RBDYwNIIPREVTS1RPUC0zVTYzTjZEhiF1cm46REVTS1RP
UC0zVTYzTjZEOnVhL25vZGUtb3BjdWEwDAYDVR0TBAUwAwEB/zAOBgNVHQ8BAf8E
BAMCAQYwQAYJYIZIAYb4QgENBDMWMVNlbGYgU2lnbmVkIENlcnRpZmljYXRlIGZv
ciBOT0RFLmpzIE9QQyBVQSBTRVJWRVIwDQYJKoZIhvcNAQELBQADggEBAL6wz2uy
pCAFZXukSzCk4LDJDSA1FfLKxpNGaNK3BqCu/t7q2d6prcx9ySFwdATD99gCFrS8
FlK92xOMBtHVr/8apvQhT7PEerovicObyO/k2+D89a79uka22wN+P/s8qdzAd/xZ
NLLyAaxB/Ke2VxS5GWg3d1056rt+RUiwChwFQC1AAnI4zNiV89O2+HhkMDc89uEi
cJb6BPzb0RnpKIza6nFuE9Mv6eRRGuQgWyBBliEQPGqLyTZO/qs42yGxU5+84WWI
rkYILiflqkTa6LeculYb65GxDK9XufCNDBQooyHPkIEaJZ2v/xd1w5jBGpnLvbLQ
3f3FhlpwAghQXMQ=
-----END CERTIFICATE-----
v

`;

const cert = pki.certificateFromPem(certPem);
var extensions = cert.extensions;
extensions.forEach(function(item){
    if(item.altNames !== undefined ){
        console.log(item.altNames[1])
    }
})
moduleData.addbien = function (namedev,name,datatype,writable,value,uaNodeList,uaNodes){
    let setID = 's="' + namedev + '"."' + name + '"';  
    if(datatype == "String"){
        myValue1 = value.toString();
        if(writable.toString() == "false"){
            let namenode = namespace.addVariable({       
                componentOf: device,            
                browseName: name,            
                dataType:  moduleTypesMap[datatype],    
                nodeId: setID,
                value: {
                    get: function () {
                        let mydataType = moduleTypesCodeMap[moduleTypesMap[datatype]];;
                        return new opcua.Variant({dataType: mydataType, value: myValue1 });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.BadNotWritable;
                    }
                }
            });
            uaNodes.push(namenode);
        } else {
            myValue1 = value.toString();
            let namenode = namespace.addVariable({       
                componentOf: device,            
                browseName: name,            
                dataType:  moduleTypesMap[datatype],    
                nodeId: setID,
                value: {
                    get: function () {
                        let mydataType = moduleTypesCodeMap[moduleTypesMap[datatype]];
                        return new opcua.Variant({dataType: mydataType, value: myValue1 });
                    },
                    set: function (variant) {
                        myValue1 = variant.value;                       
                        return opcua.StatusCodes.Good;
                    }
                }
            });
            uaNodes.push(namenode);

        }
    }                          
    if(datatype == "Bool"){
        if(writable.toString() == "false"){
            if(value.toString() == "true"){
                myValue2 = true;
            } else {
                myValue2 = false;
            }
            let namenode = namespace.addVariable({       
                componentOf: device,            
                browseName: name,            
                dataType:  moduleTypesMap[datatype],    
                nodeId: setID,
                value: {
                    get: function () {
                        let mydataType = moduleTypesCodeMap[moduleTypesMap[datatype]];
                        return new opcua.Variant({dataType: mydataType, value: myValue2 });
                    },
                    set: function (variant) {
                        return opcua.StatusCodes.BadNotWritable;
                    }
                }
            });
            uaNodes.push(namenode);
        } else {
            if(value.toString() == "true"){
                myValue2 = true;
            } else {
                myValue2 = false;
            }
            let namenode = namespace.addVariable({       
                componentOf: device,            
                browseName: name,            
                dataType:  moduleTypesMap[datatype],    
                nodeId: setID,
                value: {
                    get: function () {
                        let mydataType = moduleTypesCodeMap[moduleTypesMap[datatype]];
                        return new opcua.Variant({dataType: mydataType, value: myValue2 });
                    },
                    set: function (variant) {
                        myValue2 = variant.value;                       
                        return opcua.StatusCodes.Good;
                    }
                }
            });
            uaNodes.push(namenode);
        }
    }
    if(datatype == "Double") {
        if (writable.toString() == "false"){
            myValue3 = parseFloat(value);
            let namenode =  namespace.addVariable({
                    componentOf: device,
                    browseName: name,                
                    dataType:  moduleTypesMap[datatype],
                    nodeId: setID,
                    value: {
                        get: function () {
                            let mydataType = moduleTypesCodeMap[moduleTypesMap[datatype]];
                            return new opcua.Variant({dataType: mydataType, value: myValue3 });
                        },
                        set: function (variant) {
                            return opcua.StatusCodes.BadNotWritable;
                        }
                    }
                });
                uaNodes.push(namenode);
            } else {
                myValue3 = parseFloat(value);
            let namenode = namespace.addVariable({       
                componentOf: device,            
                browseName: name,            
                dataType:  moduleTypesMap[datatype],    
                nodeId: setID,
                value: {
                    get: function () {
                        let mydataType = moduleTypesCodeMap[moduleTypesMap[datatype]];
                        return new opcua.Variant({dataType: mydataType, value: myValue3 });
                    },
                    set: function (variant) {
                        myValue3 = parseFloat(variant.value);
                        return opcua.StatusCodes.Good;
                    }
                }
            });
            uaNodes.push(namenode);  
            }
    }
    uaNodeList.push(device);
};








if(variable.dataType !== "String"){
    if(variable.dataType == "Bool"){
        myValue = variant.value;
        variable.value = myValue;  
    } else {
        myValue = parseFloat(variant.value);
        variable.value = myValue;                           
    }
    return opcua.StatusCodes.Good;
} else {
    myValue = variant.value;
    return opcua.StatusCodes.Good;
}