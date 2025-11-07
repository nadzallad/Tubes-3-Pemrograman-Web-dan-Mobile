<template>
     <h2>Biodata Diri</h2>
        <hr>
        <div class="biodata-right">
          <p><strong>Nama : </strong>
            <a href="#" @click.prevent="addField('nama')">{{ biodata.nama || 'Masukan Nama Anda' }}</a>
          </p>
          <p><strong>Tanggal Lahir : </strong>
            <a href="#" @click.prevent="addField('tglLahir')">{{ biodata.tglLahir || 'Tambah Tanggal Lahir' }}</a>
          </p>
          <p><strong>Jenis Kelamin : </strong>
            <a href="#" @click.prevent="addField('jenisKelamin')">{{ biodata.jenisKelamin || 'Tambah Jenis Kelamin' }}</a>
          </p>
          <p><strong>Email : </strong>{{ biodata.email || 'user@gmail.com' }}
            <span v-if="biodata.email" class="verified">Terverifikasi</span>
          </p>
          <p><strong>Nomor HP : </strong>
            <a href="#" @click.prevent="addField('noHp')">{{ biodata.noHp || 'Tambah Nomor HP' }}</a>
          </p>
          <p><strong>Domisili : </strong>
            <a href="#" @click.prevent="addField('domisili')">{{ biodata.domisili || 'Tambah Domisili' }}</a>
          </p>
        </div>
</template>


<script setup>
    import { reactive } from 'vue'
    const biodata = reactive({
    nama: '',
    tglLahir: '',
    jenisKelamin: '',
    email: '',
    noHp: '',
    domisili: ''
    })

    function addField(field) {
    const label = field.replace(/([A-Z])/g, ' $1')
    const value = prompt(`Masukkan ${label}:`)
    if (value) biodata[field] = value
    }
</script>

<style scoped>
    
</style>
