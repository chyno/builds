﻿using System;
using System.Runtime.Remoting;
using System.Threading.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using TFSBuildsConnector;

namespace TfsBuildsConnectorTest
{
    [TestClass]
    public class BuildsTest
    {
        [TestMethod]
        public void CantGetBuild()
        {
            //Arrange
            var tfsBuild = new Startup();

            //Act
            Task<object> bldsTask = tfsBuild.Invoke("input");
            var result = bldsTask.Result;

            //Assert
            Assert.IsNotNull(result);


        }

         [TestMethod]
        public void CanQueBuild()
        {
            /* 
              queue.projectName = "Helo WOrld Project";
         queue.buildDefinition = "HelloWorld";
             * */
            //Arrange
            var tfsBuild = new Startup();

            //Act
            Task<object> bldsTask = tfsBuild.InvokeQueueBuild(new string[] { "Helo WOrld Project", "HelloWorld" });
            var result = bldsTask.Result;

            //Assert
            Assert.IsNotNull(result);
        }
    }
}
