import React, { useState } from 'react';
import Tree from 'react-d3-tree';
import { useCenteredTree } from './helper';
import data from '../data/data.json';

const Dashboard = () => {
    const [dimensions, translate, containerRef] = useCenteredTree();
    const [hoveredNode, setHoveredNode] = useState(null);

    const handleNodeMouseOver = (node) => {
        console.log(node);
        setHoveredNode(node);
    };

    const handleNodeMouseOut = () => {
        console.log("data");
        setHoveredNode(null);
    };

    useEffect(() => {
        const handleMouseMove = (event) => {
            setHoveredNodePosition({ x: event.clientX, y: event.clientY });
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const renderCard = ({ nodeDatum, toggleNode, foreignObjectProps = {} }) => {
        const hasChildren = nodeDatum.children?.length;
        const isResearch = nodeDatum.attributes?.isResearch;
        const isPlanning = nodeDatum.attributes?.isPlanning;
        const isDesigning = nodeDatum.attributes?.isDesigning;
        const isManufacturing = nodeDatum.attributes?.isManufacturing;
        const isSales = nodeDatum.attributes?.isSales;

        return (
            <>
                <foreignObject
                    {...foreignObjectProps}
                    width="200"
                    height="500"
                    x="-100"
                    y="-10"
                    onMouseOver={() => handleNodeMouseOver(nodeDatum)}
                    onMouseOut={handleNodeMouseOut}
                >
                    <div
                        className={`card ${hasChildren ? "card--has-children" : ""} 
                        ${isResearch ? "card--is-research" : ""}
                        ${isPlanning ? "card--is-planning" : ""}
                        ${isDesigning ? "card--is-designing" : ""}
                        ${isManufacturing ? "card--is-manufacturing" : ""}
                        ${isSales ? "card--is-sales" : ""}`}
                    >
                        <h2 className='heading'>{nodeDatum.name}</h2>
                        {hasChildren && (
                            <button className="toggle" type="button" onClick={toggleNode}>
                                {nodeDatum.__rd3t.collapsed ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        stroke="none"
                                        fill="currentcolor"
                                    >
                                        <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        stroke="none"
                                        fill="currentcolor"
                                    >
                                        <path d="M0 10h24v4h-24z" />
                                    </svg>
                                )}
                            </button>
                        )}
                    </div>
                </foreignObject>
            </>
        );
    };

    return (
        <div id="treeWrapper" style={{ width: '50vw', height: '50vh' }} ref={containerRef}>
            <Tree
                data={data}
                pathFunc="elbow"
                initialDepth={0}
                orientation='vertical'
                dimensions={dimensions}
                onMouseOverNode={handleNodeMouseOver}
                onMouseOutNode={handleNodeMouseOut}
                centeringTransitionDuration={200}
                translate={translate}
                separation={{ siblings: 1.55, nonSiblings: 2 }}
                renderCustomNodeElement={(rd3tProps) => renderCard({ ...rd3tProps, isHovered: rd3tProps.nodeDatum === hoveredNode })}
            />

{hoveredNode && (
    <div className="hover-box" style={{ top: hoveredNode.y - 100, left: hoveredNode.x + 200 }}>
        <div>{hoveredNode.name}</div>
        {hoveredNode.attributes && hoveredNode.attributes.details && (
            <div>{hoveredNode.attributes.details}</div>
        )}
    </div>
)}
        </div>
    );
}

export default Dashboard;