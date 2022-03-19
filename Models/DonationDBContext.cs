 using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class DonationDBContext:DbContext
    {
        public DonationDBContext()
        {

        }
        public DonationDBContext(DbContextOptions<DonationDBContext> options):base(options)
        {

        }

        public DbSet<DCandidate> DCandidates { get; set; }
        public DbSet<Test> Tests { get; set; }


        public DbSet<Student> Students { get; set; }
    }

}
