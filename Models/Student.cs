using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Student
    {    [Key]
        public int Id { get; set; }
        [Column(TypeName = "nvarchar(10)")]

        public string Name { get;set;}
        [Column(TypeName = "nvarchar(18)")]

        public int Age { get; set; }
        [Column(TypeName = "nvarchar(19)")]
        public string Department { get; set; }


        [Column(TypeName = "nvarchar(10)")]
        public bool IsResidential { get; set; }


        [Column(TypeName = "nvarchar(109)")]
        public string Gender { get; set; }
      
  
    }
}
