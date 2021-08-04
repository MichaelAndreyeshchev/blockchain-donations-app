import pymssql

conn = pymssql.connect(server='cryptonate.database.windows.net:1433', 
    user='Cryptonate@cryptonate', 
    password='666dcd94-efce-11eb-9a03-0242ac130003', 
    database='Cryptonate_db')

cursor = conn.cursor()  
cursor.execute('SELECT * FROM donor_info')
row = cursor.fetchone()  
while row:  
    print(str(row[0]))     


print("Connection established!")