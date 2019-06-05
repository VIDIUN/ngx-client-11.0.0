/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaResponseProfileCacheRecalculateResultsArgs() { }
/** @type {?|undefined} */
KalturaResponseProfileCacheRecalculateResultsArgs.prototype.lastObjectKey;
/** @type {?|undefined} */
KalturaResponseProfileCacheRecalculateResultsArgs.prototype.recalculated;
export class KalturaResponseProfileCacheRecalculateResults extends KalturaObjectBase {
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
            objectType: { type: 'c', default: 'KalturaResponseProfileCacheRecalculateResults' },
            lastObjectKey: { type: 's' },
            recalculated: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaResponseProfileCacheRecalculateResults.prototype.lastObjectKey;
    /** @type {?} */
    KalturaResponseProfileCacheRecalculateResults.prototype.recalculated;
}
typesMappingStorage['KalturaResponseProfileCacheRecalculateResults'] = KalturaResponseProfileCacheRecalculateResults;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVJlc3BvbnNlUHJvZmlsZUNhY2hlUmVjYWxjdWxhdGVSZXN1bHRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhUmVzcG9uc2VQcm9maWxlQ2FjaGVSZWNhbGN1bGF0ZVJlc3VsdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7OztBQVFsRixNQUFNLG9EQUFxRCxTQUFRLGlCQUFpQjs7OztJQUtoRixZQUFZLElBQXlEO1FBRWpFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywrQ0FBK0MsRUFBRTtZQUNsRyxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDcEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsK0NBQStDLENBQUMsR0FBRyw2Q0FBNkMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVJlc3BvbnNlUHJvZmlsZUNhY2hlUmVjYWxjdWxhdGVSZXN1bHRzQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIGxhc3RPYmplY3RLZXk/IDogc3RyaW5nO1xuXHRyZWNhbGN1bGF0ZWQ/IDogbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhUmVzcG9uc2VQcm9maWxlQ2FjaGVSZWNhbGN1bGF0ZVJlc3VsdHMgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICBsYXN0T2JqZWN0S2V5IDogc3RyaW5nO1xuXHRyZWNhbGN1bGF0ZWQgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFSZXNwb25zZVByb2ZpbGVDYWNoZVJlY2FsY3VsYXRlUmVzdWx0c0FyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhUmVzcG9uc2VQcm9maWxlQ2FjaGVSZWNhbGN1bGF0ZVJlc3VsdHMnIH0sXG5cdFx0XHRcdGxhc3RPYmplY3RLZXkgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cmVjYWxjdWxhdGVkIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFSZXNwb25zZVByb2ZpbGVDYWNoZVJlY2FsY3VsYXRlUmVzdWx0cyddID0gS2FsdHVyYVJlc3BvbnNlUHJvZmlsZUNhY2hlUmVjYWxjdWxhdGVSZXN1bHRzOyJdfQ==