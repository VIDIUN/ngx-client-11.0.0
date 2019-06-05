/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaServerNode } from './KalturaServerNode';
/**
 * @record
 */
export function KalturaConferenceServerNodeArgs() { }
/** @type {?|undefined} */
KalturaConferenceServerNodeArgs.prototype.serviceBaseUrl;
export class KalturaConferenceServerNode extends KalturaServerNode {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaConferenceServerNode' },
            serviceBaseUrl: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaConferenceServerNode.prototype.serviceBaseUrl;
}
typesMappingStorage['KalturaConferenceServerNode'] = KalturaConferenceServerNode;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNvbmZlcmVuY2VTZXJ2ZXJOb2RlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQ29uZmVyZW5jZVNlcnZlck5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7QUFPL0UsTUFBTSxrQ0FBbUMsU0FBUSxpQkFBaUI7Ozs7SUFJOUQsWUFBWSxJQUF1QztRQUUvQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsNkJBQTZCLEVBQUU7WUFDaEYsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUN0QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7O0FBRUQsbUJBQW1CLENBQUMsNkJBQTZCLENBQUMsR0FBRywyQkFBMkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhU2VydmVyTm9kZSwgS2FsdHVyYVNlcnZlck5vZGVBcmdzIH0gZnJvbSAnLi9LYWx0dXJhU2VydmVyTm9kZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUNvbmZlcmVuY2VTZXJ2ZXJOb2RlQXJncyAgZXh0ZW5kcyBLYWx0dXJhU2VydmVyTm9kZUFyZ3Mge1xuICAgIHNlcnZpY2VCYXNlVXJsPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUNvbmZlcmVuY2VTZXJ2ZXJOb2RlIGV4dGVuZHMgS2FsdHVyYVNlcnZlck5vZGUge1xuXG4gICAgc2VydmljZUJhc2VVcmwgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFDb25mZXJlbmNlU2VydmVyTm9kZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQ29uZmVyZW5jZVNlcnZlck5vZGUnIH0sXG5cdFx0XHRcdHNlcnZpY2VCYXNlVXJsIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFDb25mZXJlbmNlU2VydmVyTm9kZSddID0gS2FsdHVyYUNvbmZlcmVuY2VTZXJ2ZXJOb2RlOyJdfQ==