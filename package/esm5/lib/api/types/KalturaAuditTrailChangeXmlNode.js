/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaAuditTrailChangeXmlNodeType } from './KalturaAuditTrailChangeXmlNodeType';
import { KalturaAuditTrailChangeItem } from './KalturaAuditTrailChangeItem';
/**
 * @record
 */
export function KalturaAuditTrailChangeXmlNodeArgs() { }
/** @type {?|undefined} */
KalturaAuditTrailChangeXmlNodeArgs.prototype.type;
var KalturaAuditTrailChangeXmlNode = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaAuditTrailChangeXmlNode, _super);
    function KalturaAuditTrailChangeXmlNode(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaAuditTrailChangeXmlNode.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAuditTrailChangeXmlNode' },
            type: { type: 'en', subTypeConstructor: KalturaAuditTrailChangeXmlNodeType, subType: 'KalturaAuditTrailChangeXmlNodeType' }
        });
        return result;
    };
    return KalturaAuditTrailChangeXmlNode;
}(KalturaAuditTrailChangeItem));
export { KalturaAuditTrailChangeXmlNode };
if (false) {
    /** @type {?} */
    KalturaAuditTrailChangeXmlNode.prototype.type;
}
typesMappingStorage['KalturaAuditTrailChangeXmlNode'] = KalturaAuditTrailChangeXmlNode;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUF1ZGl0VHJhaWxDaGFuZ2VYbWxOb2RlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQXVkaXRUcmFpbENoYW5nZVhtbE5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDMUYsT0FBTyxFQUFFLDJCQUEyQixFQUFtQyxNQUFNLCtCQUErQixDQUFDOzs7Ozs7O0FBTzdHLElBQUE7SUFBb0QsMERBQTJCO0lBSTNFLHdDQUFZLElBQTBDO2VBRWxELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMscURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsZ0NBQWdDLEVBQUU7WUFDbkYsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxrQ0FBa0MsRUFBRSxPQUFPLEVBQUcsb0NBQW9DLEVBQUU7U0FDdEgsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjt5Q0E5Qkw7RUFVb0QsMkJBQTJCLEVBcUI5RSxDQUFBO0FBckJELDBDQXFCQzs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxnQ0FBZ0MsQ0FBQyxHQUFHLDhCQUE4QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFBdWRpdFRyYWlsQ2hhbmdlWG1sTm9kZVR5cGUgfSBmcm9tICcuL0thbHR1cmFBdWRpdFRyYWlsQ2hhbmdlWG1sTm9kZVR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUF1ZGl0VHJhaWxDaGFuZ2VJdGVtLCBLYWx0dXJhQXVkaXRUcmFpbENoYW5nZUl0ZW1BcmdzIH0gZnJvbSAnLi9LYWx0dXJhQXVkaXRUcmFpbENoYW5nZUl0ZW0nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFBdWRpdFRyYWlsQ2hhbmdlWG1sTm9kZUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUF1ZGl0VHJhaWxDaGFuZ2VJdGVtQXJncyB7XG4gICAgdHlwZT8gOiBLYWx0dXJhQXVkaXRUcmFpbENoYW5nZVhtbE5vZGVUeXBlO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQXVkaXRUcmFpbENoYW5nZVhtbE5vZGUgZXh0ZW5kcyBLYWx0dXJhQXVkaXRUcmFpbENoYW5nZUl0ZW0ge1xuXG4gICAgdHlwZSA6IEthbHR1cmFBdWRpdFRyYWlsQ2hhbmdlWG1sTm9kZVR5cGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFBdWRpdFRyYWlsQ2hhbmdlWG1sTm9kZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQXVkaXRUcmFpbENoYW5nZVhtbE5vZGUnIH0sXG5cdFx0XHRcdHR5cGUgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQXVkaXRUcmFpbENoYW5nZVhtbE5vZGVUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFBdWRpdFRyYWlsQ2hhbmdlWG1sTm9kZVR5cGUnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFBdWRpdFRyYWlsQ2hhbmdlWG1sTm9kZSddID0gS2FsdHVyYUF1ZGl0VHJhaWxDaGFuZ2VYbWxOb2RlOyJdfQ==