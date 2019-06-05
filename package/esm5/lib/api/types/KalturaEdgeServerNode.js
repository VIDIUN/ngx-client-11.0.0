/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDeliveryServerNode } from './KalturaDeliveryServerNode';
/**
 * @record
 */
export function KalturaEdgeServerNodeArgs() { }
/** @type {?|undefined} */
KalturaEdgeServerNodeArgs.prototype.playbackDomain;
/** @type {?|undefined} */
KalturaEdgeServerNodeArgs.prototype.config;
var KalturaEdgeServerNode = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaEdgeServerNode, _super);
    function KalturaEdgeServerNode(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaEdgeServerNode.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaEdgeServerNode' },
            playbackDomain: { type: 's' },
            config: { type: 's' }
        });
        return result;
    };
    return KalturaEdgeServerNode;
}(KalturaDeliveryServerNode));
export { KalturaEdgeServerNode };
if (false) {
    /** @type {?} */
    KalturaEdgeServerNode.prototype.playbackDomain;
    /** @type {?} */
    KalturaEdgeServerNode.prototype.config;
}
typesMappingStorage['KalturaEdgeServerNode'] = KalturaEdgeServerNode;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVkZ2VTZXJ2ZXJOb2RlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRWRnZVNlcnZlck5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHlCQUF5QixFQUFpQyxNQUFNLDZCQUE2QixDQUFDOzs7Ozs7Ozs7QUFRdkcsSUFBQTtJQUEyQyxpREFBeUI7SUFLaEUsK0JBQVksSUFBaUM7ZUFFekMsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyw0Q0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx1QkFBdUIsRUFBRTtZQUMxRSxjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDZCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO2dDQWhDTDtFQVUyQyx5QkFBeUIsRUF1Qm5FLENBQUE7QUF2QkQsaUNBdUJDOzs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsdUJBQXVCLENBQUMsR0FBRyxxQkFBcUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRGVsaXZlcnlTZXJ2ZXJOb2RlLCBLYWx0dXJhRGVsaXZlcnlTZXJ2ZXJOb2RlQXJncyB9IGZyb20gJy4vS2FsdHVyYURlbGl2ZXJ5U2VydmVyTm9kZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUVkZ2VTZXJ2ZXJOb2RlQXJncyAgZXh0ZW5kcyBLYWx0dXJhRGVsaXZlcnlTZXJ2ZXJOb2RlQXJncyB7XG4gICAgcGxheWJhY2tEb21haW4/IDogc3RyaW5nO1xuXHRjb25maWc/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRWRnZVNlcnZlck5vZGUgZXh0ZW5kcyBLYWx0dXJhRGVsaXZlcnlTZXJ2ZXJOb2RlIHtcblxuICAgIHBsYXliYWNrRG9tYWluIDogc3RyaW5nO1xuXHRjb25maWcgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFFZGdlU2VydmVyTm9kZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRWRnZVNlcnZlck5vZGUnIH0sXG5cdFx0XHRcdHBsYXliYWNrRG9tYWluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNvbmZpZyA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRWRnZVNlcnZlck5vZGUnXSA9IEthbHR1cmFFZGdlU2VydmVyTm9kZTsiXX0=