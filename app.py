import sqlite3
import bcrypt

def register_user(username, email, password):
    # Hash de la contraseña
    hashed_password = bcrypt.hashpw(password.encode(), bcrypt.gensalt())

    # Conexión a la base de datos
    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()

    try:
        cursor.execute("INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
                       (username, email, hashed_password))
        conn.commit()
        print("Usuario registrado correctamente")
    except sqlite3.IntegrityError:
        print("Error: el usuario o corre ya esta registrado")
    finally:
        conn.close()

# Ejemplo de uso
register_user("samuel", "samuel@mail.com", "MiContraseña123")
