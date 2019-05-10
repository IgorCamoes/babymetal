from django.db import models

# Create your models here.

class Fas(models.Model):

    selecione_pais = 'sp'
    brazil = 'br'
    eua = 'us'
    


    nome = models.CharField(Max_length=100)
    pais = models.CharField(max_length=2, choices=pais_opcoes, default=selecione)